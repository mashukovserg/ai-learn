"""Конфигурация калибровки: корзины навыков O*NET → три фактора модели v3.0.

Каждый фактор считается как средняя importance навыков из своей корзины, нормируется
min–max по всем 894 профессиям в шкалу 0..10 и (где нужно) инвертируется, чтобы
направление совпадало с экспертной шкалой: больше балл — выше чувствительность к ИИ.

Правило инверсии: во всех трёх корзинах высокий навык означает НИЗКУЮ чувствительность
(ручная работа, нерутинное мышление, высокая ответственность), поэтому все три фактора
инвертируются: factor = 10 * (1 - norm(basket)).

CONFIDENCE: F1 и F3 — надёжные прокси (валидация подтвердила). F2 — низкоуверенный:
Skills-файл плохо меряет рутинность, для неё нужен O*NET Work Context
(Structured versus Unstructured Work, Importance of Repeating Same Tasks).
"""

# Все 35 навыков файла O*NET Skills присутствуют; в корзины отобраны релевантные.

FACTORS = {
    # F1 — Доступность для ИИ / технический барьер.
    # Физические и «ручные» навыки = низкая доступность для ИИ → инверсия.
    "f1_accessibility": {
        "invert": True,
        "confidence": "high",
        "skills": [
            "Equipment Maintenance",
            "Equipment Selection",
            "Installation",
            "Operation and Control",
            "Operations Monitoring",
            "Repairing",
            "Troubleshooting",
            "Quality Control Analysis",
        ],
    },
    # F2 — Рутинность / когнитивный барьер.
    # Нерутинные когнитивные навыки = низкая рутинность → инверсия.
    # ВНИМАНИЕ: низкоуверенный прокси, до выгрузки Work Context.
    "f2_routineness": {
        "invert": True,
        "confidence": "low",
        "skills": [
            "Complex Problem Solving",
            "Critical Thinking",
            "Systems Analysis",
            "Systems Evaluation",
            "Active Learning",
            "Learning Strategies",
            "Judgment and Decision Making",
            "Operations Analysis",
            "Science",
            "Technology Design",
        ],
    },
    # F3 — Делегируемость решений / социально-юридический барьер.
    # Навыки ответственности/управления/социальные = низкая делегируемость → инверсия.
    "f3_delegability": {
        "invert": True,
        "confidence": "high",
        "skills": [
            "Judgment and Decision Making",
            "Management of Financial Resources",
            "Management of Material Resources",
            "Management of Personnel Resources",
            "Negotiation",
            "Social Perceptiveness",
            "Persuasion",
            "Service Orientation",
            "Instructing",
            "Coordination",
        ],
    },
}

# Метрика O*NET для расчёта: "importance" (1..5) или "level" (0..6).
ONET_METRIC = "importance"

# Если навык отсутствует у профессии (пустая ячейка) — подставляем это значение по метрике.
MISSING_SKILL_FILL = 1.0

# Порог |Δ| между экспертным и O*NET-баллом, при котором профессия идёт на ревизию.
REVIEW_DELTA = 2.0
