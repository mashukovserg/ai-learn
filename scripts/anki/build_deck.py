#!/usr/bin/env python3
"""Build an Anki package (.apkg) from the platform's room tasks.

Input:  rooms.json produced by `npx vitest run scripts/anki/dump-rooms.test.ts`
        (shape: { rooms: ROOMS_METADATA, paths: PATHS_METADATA, tasks: ROOM_TASKS }).
Output: one .apkg with two top-level decks, "AI-Learn RU" and "AI-Learn EN",
        each split into one subdeck per room. Every card's back names the room.

Usage:  python3 scripts/anki/build_deck.py scripts/anki/rooms.json docs/anki/ai-learn.apkg

Requires `genanki` (pip install genanki).
"""
from __future__ import annotations

import html
import json
import sys
from pathlib import Path

import genanki

LANGS = ("ru", "en")
DECK_ROOT = {"ru": "AI-Learn RU", "en": "AI-Learn EN"}
LABELS = {
    "ru": {
        "room": "Комната",
        "options": "Варианты",
        "order": "Правильный порядок",
        "items": "Элементы",
        "buckets": "Категории",
        "hint": "Подсказка",
        "constraints": "Условия",
        "choices": "Варианты действий",
        "best": "Лучший выбор",
        "score": "баллов",
        "mentor": "Наставник",
        "reply": "Верный ответ",
        "sort_prompt": "Расположите в правильном порядке",
        "timeline_prompt": "Расположите события по хронологии",
        "categorize_prompt": "Распределите по категориям",
        "path": "Путь",
    },
    "en": {
        "room": "Room",
        "options": "Options",
        "order": "Correct order",
        "items": "Items",
        "buckets": "Buckets",
        "hint": "Hint",
        "constraints": "Constraints",
        "choices": "Choices",
        "best": "Best choice",
        "score": "points",
        "mentor": "Mentor",
        "reply": "Correct reply",
        "sort_prompt": "Put these in the right order",
        "timeline_prompt": "Order these events chronologically",
        "categorize_prompt": "Sort into buckets",
        "path": "Path",
    },
}

# Fixed IDs so re-imports update notes in place instead of duplicating them.
MODEL_ID = 1_726_493_301
DECK_ID_BASE = 2_040_000_000

CSS = """
.card { font-family: -apple-system, "IBM Plex Sans", "Segoe UI", Helvetica, Arial, sans-serif;
        font-size: 18px; line-height: 1.5; text-align: left; color: #1c2126; background: #fbfbfa;
        max-width: 42em; margin: 0 auto; padding: 8px 16px; }
.nightMode .card, .night_mode .card { color: #d5dadf; background: #111416; }
.q { font-weight: 600; }
.meta { font-family: ui-monospace, Menlo, monospace; font-size: 12px; letter-spacing: .06em;
        text-transform: uppercase; color: #6b7680; margin-bottom: 10px; }
.room { margin-top: 18px; padding-top: 10px; border-top: 1px solid #d8dde2; font-size: 15px; color: #1f7f6b; }
.nightMode .room, .night_mode .room { border-color: #262c31; color: #5ab8a3; }
.room b { font-weight: 600; }
.answer { margin-top: 12px; }
.answer .ok { font-weight: 600; }
.expl { margin-top: 12px; color: #4d5761; }
.nightMode .expl, .night_mode .expl { color: #a3adb7; }
ol, ul { padding-left: 1.4em; margin: 6px 0; }
li { margin: 2px 0; }
hr { border: 0; border-top: 1px solid #d8dde2; margin: 14px 0; }
.nightMode hr, .night_mode hr { border-color: #262c31; }
"""

MODEL = genanki.Model(
    MODEL_ID,
    "AI-Learn room card",
    fields=[
        {"name": "Question"},
        {"name": "Answer"},
        {"name": "Explanation"},
        {"name": "Room"},
        {"name": "RoomId"},
        {"name": "TaskType"},
        {"name": "Path"},
        {"name": "Lang"},
    ],
    templates=[
        {
            "name": "Question → Answer",
            # The room is named on the back only, so the front never hints at the topic.
            "qfmt": '<div class="meta">{{TaskType}}</div><div class="q">{{Question}}</div>',
            "afmt": (
                '<div class="meta">{{TaskType}}</div><div class="q">{{Question}}</div><hr>'
                '<div class="answer">{{Answer}}</div>'
                '<div class="expl">{{Explanation}}</div>'
                '<div class="room"><b>{{RoomLabel}}:</b> {{Room}}'
                '{{#Path}} · {{PathLabel}}: {{Path}}{{/Path}}</div>'
            ),
        }
    ],
    css=CSS,
)
# Mustache has no i18n; inject the localized labels as extra fields.
MODEL.fields.append({"name": "RoomLabel"})
MODEL.fields.append({"name": "PathLabel"})


def esc(s: str) -> str:
    return html.escape(str(s), quote=False)


def loc(x, lang: str) -> str:
    """LocalizedString | str → text in `lang`."""
    if isinstance(x, dict):
        return x.get(lang) or x.get("en") or x.get("ru") or ""
    return "" if x is None else str(x)


def ol(items) -> str:
    return "<ol>" + "".join(f"<li>{esc(i)}</li>" for i in items) + "</ol>"


def ul(items) -> str:
    return "<ul>" + "".join(f"<li>{esc(i)}</li>" for i in items) + "</ul>"


def render(task: dict, lang: str) -> tuple[str, str] | None:
    """Return (question_html, answer_html) for a task, or None to skip."""
    L = LABELS[lang]
    t = task["type"]
    q = esc(loc(task.get("question"), lang))

    if t == "multiple-choice":
        opts = [loc(o, lang) for o in task.get("options", [])]
        return q + ol(opts), f'<span class="ok">{esc(loc(task["answer"], lang))}</span>'

    if t == "multiple-select":
        opts = [loc(o, lang) for o in task.get("options", [])]
        ans = [loc(a, lang) for a in task.get("answer", [])]
        return q + ol(opts), ul(ans)

    if t == "input":
        a = task.get("answer")
        if isinstance(a, list):
            text = " / ".join(str(x) for x in a)
        else:
            text = loc(a, lang)
        hint = loc(task.get("hint"), lang)
        front = q + (f'<div class="expl">{esc(hint)}</div>' if hint else "")
        return front, f'<span class="ok">{esc(text)}</span>'

    if t == "sorting":
        items = [loc(i, lang) for i in task.get("initialItems", [])]
        order = [loc(i, lang) for i in task.get("correctOrder", [])]
        if not order:
            return None
        front = q + f"<div>{L['sort_prompt']}:</div>" + ul(items or sorted(order))
        return front, f"<div>{L['order']}:</div>" + ol(order)

    if t == "timeline":
        tl = task.get("timeline") or {}
        events = tl.get("events", [])
        order = [loc(i, lang) for i in tl.get("correctOrder", [])]
        if not order:
            return None
        year_of = {loc(e["label"], lang): e.get("year", "") for e in events}
        # Show the events alphabetically so the front does not leak the order.
        front = q + f"<div>{L['timeline_prompt']}:</div>" + ul(sorted(year_of))
        back = ol(f"{lbl} — {year_of.get(lbl, '')}".rstrip(" —") for lbl in order)
        return front, f"<div>{L['order']}:</div>" + back

    if t == "categorize":
        c = task.get("categorize") or {}
        items, buckets, mapping = c.get("items", []), c.get("buckets", []), c.get("correctMapping", {})
        if not mapping:
            return None
        bucket_by_en = {b["en"]: loc(b, lang) for b in buckets}
        grouped: dict[str, list[str]] = {loc(b, lang): [] for b in buckets}
        for it in items:
            bucket = bucket_by_en.get(mapping.get(it["en"], ""), mapping.get(it["en"], ""))
            grouped.setdefault(bucket, []).append(loc(it, lang))
        front = (
            q
            + f"<div>{L['categorize_prompt']}. {L['items']}:</div>"
            + ul(loc(i, lang) for i in items)
            + f"<div>{L['buckets']}:</div>"
            + ul(loc(b, lang) for b in buckets)
        )
        back = "".join(f"<div><b>{esc(b)}</b>{ul(v)}</div>" for b, v in grouped.items() if v)
        return front, back

    if t == "mentor":
        d = task.get("dialogue") or {}
        msg = loc(d.get("mentorMessage"), lang)
        opts = d.get("userOptions", [])
        if not msg or not opts:
            return None
        front = f'<div class="q">{q}</div><div><b>{L["mentor"]}:</b> {esc(msg)}</div>' + ol(loc(o["text"], lang) for o in opts)
        correct = [o for o in opts if o.get("isCorrect")]
        parts = []
        for o in correct:
            parts.append(f'<div class="ok">{esc(loc(o["text"], lang))}</div>')
            if o.get("reaction"):
                parts.append(f"<div>{esc(loc(o['reaction'], lang))}</div>")
            if o.get("deepening"):
                parts.append(f'<div class="expl">{esc(loc(o["deepening"], lang))}</div>')
        return front, f"<div>{L['reply']}:</div>" + "".join(parts)

    if t == "scenario":
        s = task.get("scenario") or {}
        choices = s.get("choices", [])
        if not choices:
            return None
        front = (
            f'<div class="q">{q}</div><div>{esc(loc(s.get("brief"), lang))}</div>'
            + (f"<div><b>{L['constraints']}:</b></div>" + ul(loc(c, lang) for c in s.get("constraints", [])) if s.get("constraints") else "")
            + f"<div><b>{L['choices']}:</b></div>"
            + ol(loc(c["text"], lang) for c in choices)
        )
        best_score = max(c.get("score", 0) for c in choices)
        best = [c for c in choices if c.get("score", 0) == best_score]
        back = f"<div>{L['best']} ({best_score} {L['score']}):</div>" + "".join(
            f'<div class="ok">{esc(loc(c["text"], lang))}</div><div>{esc(loc(c.get("outcome"), lang))}</div>' for c in best
        )
        return front, back

    return None


def main(src: Path, dst: Path) -> None:
    data = json.loads(src.read_text(encoding="utf-8"))
    rooms = {r["id"]: r for r in data["rooms"]}
    paths = {p["id"]: p for p in data["paths"]}
    tasks: dict[str, list[dict]] = data["tasks"]

    decks: dict[str, genanki.Deck] = {}
    counts = {"ru": 0, "en": 0, "skipped": 0}

    for idx, (room_id, room_tasks) in enumerate(sorted(tasks.items(), key=lambda kv: list(rooms).index(kv[0]) if kv[0] in rooms else 999)):
        room = rooms.get(room_id)
        if room is None:
            continue
        path_ids = room.get("pathIds") or []
        for lang in LANGS:
            title = loc(room["title"], lang)
            deck_name = f"{DECK_ROOT[lang]}::{title}"
            deck = decks.get(deck_name)
            if deck is None:
                deck = genanki.Deck(DECK_ID_BASE + idx * 2 + LANGS.index(lang), deck_name)
                decks[deck_name] = deck
            path_title = ", ".join(loc(paths[p]["title"], lang) for p in path_ids if p in paths)
            for task in room_tasks:
                rendered = render(task, lang)
                if rendered is None:
                    if lang == "ru":
                        counts["skipped"] += 1
                    continue
                front, back = rendered
                note = genanki.Note(
                    model=MODEL,
                    fields=[
                        front,
                        back,
                        esc(loc(task.get("explanation"), lang)),
                        esc(title),
                        room_id,
                        task["type"],
                        esc(path_title),
                        lang,
                        LABELS[lang]["room"],
                        LABELS[lang]["path"],
                    ],
                    guid=genanki.guid_for("ai-learn", lang, room_id, task["id"]),
                    tags=[f"room::{room_id}", f"type::{task['type']}", f"lang::{lang}"] + [f"path::{p}" for p in path_ids],
                )
                deck.add_note(note)
                counts[lang] += 1

    dst.parent.mkdir(parents=True, exist_ok=True)
    genanki.Package(list(decks.values())).write_to_file(str(dst))
    print(f"wrote {dst}: {counts['ru']} RU notes, {counts['en']} EN notes across {len(decks)//2} rooms; skipped {counts['skipped']} tasks")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(Path(sys.argv[1]), Path(sys.argv[2]))
