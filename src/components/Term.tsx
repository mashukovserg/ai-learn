"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GLOSSARY } from '@/data/glossary';
import { BookOpen } from 'lucide-react';

interface TermProps {
  id: string;
  lang: string;
  children?: React.ReactNode;
}

export default function Term({ id, lang, children }: TermProps) {
  const [isHovered, setIsHovered] = useState(false);
  const glossaryEntry = GLOSSARY[id];

  if (!glossaryEntry) {
    return <span className="text-red-500 font-bold">{children || id} [Term not found]</span>;
  }

  const l = lang as 'ru' | 'en';
  const termText = children || glossaryEntry.term[l];
  const definition = glossaryEntry.definition[l];

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="cursor-help border-b border-dotted border-emerald-500/50 hover:border-emerald-400 text-emerald-400/90 hover:text-emerald-300 transition-colors">
        {termText}
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-[#1a1a1a] border border-[#333] rounded-xl shadow-2xl z-[100] pointer-events-none"
          >
            <span className="flex items-center gap-2 mb-2">
              <BookOpen size={14} className="text-emerald-500" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Глоссарий</span>
            </span>
            <span className="block text-sm text-neutral-200 leading-relaxed">
              {definition}
            </span>
            {/* Arrow */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
