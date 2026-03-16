import os
import re
import json
import sys

# Get the script's directory and then the project root (one level up)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)

def count_words(text):
    if not text:
        return 0
    words = [w for w in text.split() if w.strip()]
    return len(words)

def extract_from_ts():
    rooms_path = os.path.join(PROJECT_ROOT, 'src/data/rooms.ts')
    if not os.path.exists(rooms_path):
        print(f"Error: {rooms_path} not found")
        print(f"Current working directory: {os.getcwd()}")
        return {}, {}
    
    with open(rooms_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Improved extraction for ROOMS_METADATA
    metadata_results = {}
    metadata_match = re.search(r'export const ROOMS_METADATA: LocalizedRoomMetadata\[\] = \[(.*?)\];', content, re.DOTALL)
    if metadata_match:
        rooms_raw = metadata_match.group(1)
        # Find individual room objects - splitting by 'id:' since it's a stable key
        room_blocks = re.split(r'\{\s*id:', rooms_raw)
        for block in room_blocks:
            if not block.strip(): continue
            
            id_match = re.search(r"^['\"]([^'\"]+)['\"]", block.strip())
            if not id_match: continue
            room_id = id_match.group(1)
            
            # Find all ru: and en: strings
            ru_strings = re.findall(r"ru:\s*['\"](.*?)['\"]", block, re.DOTALL)
            en_strings = re.findall(r"en:\s*['\"](.*?)['\"]", block, re.DOTALL)
            
            metadata_results[room_id] = {
                'ru': count_words(" ".join(ru_strings)),
                'en': count_words(" ".join(en_strings))
            }

    # Improved extraction for ROOM_TASKS
    task_results = {}
    tasks_match = re.search(r'export const ROOM_TASKS: Record<string, LocalizedTask\[\]> = \{(.*?)\};', content, re.DOTALL)
    if tasks_match:
        tasks_raw = tasks_match.group(1)
        # Split by room keys
        room_tasks_blocks = re.findall(r"['\"]([^'\"]+)['\"]:\s*\[(.*?)\]\s*,\s*(?=['\"]|\})", tasks_raw + "}", re.DOTALL)
        if not room_tasks_blocks:
            # Fallback if the trailing lookahead fails
            room_tasks_blocks = re.findall(r"['\"]([^'\"]+)['\"]:\s*\[(.*?)\]", tasks_raw, re.DOTALL)

        for room_id, block in room_tasks_blocks:
            ru_strings = re.findall(r"ru:\s*['\"](.*?)['\"]", block, re.DOTALL)
            en_strings = re.findall(r"en:\s*['\"](.*?)['\"]", block, re.DOTALL)
            
            task_results[room_id] = {
                'ru': count_words(" ".join(ru_strings)),
                'en': count_words(" ".join(en_strings))
            }
            
    return metadata_results, task_results

def get_markdown_counts():
    obsidian_dir = os.path.join(PROJECT_ROOT, 'obsidian-lessons')
    if not os.path.exists(obsidian_dir):
        print(f"Warning: {obsidian_dir} not found")
        return {}
    
    # Fuzzy mapping based on file naming convention
    files = os.listdir(obsidian_dir)
    results = {}
    
    # Known mappings from ROOMS_METADATA titles/ids
    mappings = {
        'llm-landscape': 'LLM Landscape',
        'llm-mechanics': 'How LLMs Think',
        'ai-history': 'AI History',
        'chatgpt-moment': 'ChatGPT Moment',
        'ai-alignment': 'AI Alignment',
        'native-multimodality': 'Native Multimodality',
        'ai-agents': 'AI Agents',
        'ai-rag': 'AI RAG',
        'ai-security': 'AI Security',
        'ai-research': 'AI Research',
    }
    
    for room_id, base_name in mappings.items():
        ru_file = f"{base_name} (RU).md"
        en_file = f"{base_name} (EN).md"
        
        ru_count = 0
        en_count = 0
        
        if ru_file in files:
            with open(os.path.join(obsidian_dir, ru_file), 'r', encoding='utf-8') as f:
                ru_count = count_words(f.read())
        
        if en_file in files:
            with open(os.path.join(obsidian_dir, en_file), 'r', encoding='utf-8') as f:
                en_count = count_words(f.read())
        
        if ru_count > 0 or en_count > 0:
            results[room_id] = {'ru': ru_count, 'en': en_count}
            
    return results

def main():
    meta, tasks = extract_from_ts()
    md = get_markdown_counts()
    
    all_room_ids = sorted(set(list(meta.keys()) + list(tasks.keys()) + list(md.keys())))
    
    print(f"{'Room ID':<25} | {'RU (Total)':<12} | {'EN (Total)':<12} | {'Meta/Task/MD'}")
    print("-" * 75)
    
    for rid in all_room_ids:
        m_ru, m_en = meta.get(rid, {}).get('ru', 0), meta.get(rid, {}).get('en', 0)
        t_ru, t_en = tasks.get(rid, {}).get('ru', 0), tasks.get(rid, {}).get('en', 0)
        d_ru, d_en = md.get(rid, {}).get('ru', 0), md.get(rid, {}).get('en', 0)
        
        total_ru = m_ru + t_ru + d_ru
        total_en = m_en + t_en + d_en
        
        breakdown = f"RU: {m_ru}/{t_ru}/{d_ru} | EN: {m_en}/{t_en}/{d_en}"
        
        print(f"{rid:<25} | {total_ru:<12} | {total_en:<12} | {breakdown}")

if __name__ == "__main__":
    main()