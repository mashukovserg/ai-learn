"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Trophy, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import Link from 'next/link';

interface CompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomTitle: string;
  pointsEarned: number;
  nextRoomId?: string;
  lang: string;
}

export default function CompletionModal({
  isOpen,
  onClose,
  roomTitle,
  pointsEarned,
  nextRoomId,
  lang
}: CompletionModalProps) {
  
  useEffect(() => {
    if (isOpen) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: ReturnType<typeof setInterval> = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10"
          >
            {/* Header with gradient */}
            <div className="h-32 bg-gradient-to-br from-emerald-500/20 to-blue-500/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Sparkles className="absolute top-4 left-10 text-emerald-400 animate-pulse" size={24} />
                <Sparkles className="absolute bottom-6 right-12 text-blue-400 animate-bounce" size={16} />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                className="bg-[#141414] p-4 rounded-full border-4 border-emerald-500/30"
              >
                <CheckCircle2 className="text-emerald-500" size={48} />
              </motion.div>
            </div>

            <div className="p-8 pt-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                {lang === 'ru' ? 'Комната пройдена!' : 'Room Completed!'}
              </h2>
              <p className="text-neutral-400 mb-8 px-4">
                {lang === 'ru' 
                  ? `Поздравляем! Вы успешно изучили тему "${roomTitle}"` 
                  : `Congratulations! You have successfully mastered the "${roomTitle}" room.`}
              </p>

              {/* Stats Card */}
              <div className="bg-[#0a0a0a] border border-[#262626] rounded-xl p-6 mb-8 flex justify-center items-center gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-emerald-500 mb-1">
                    <Trophy size={18} />
                    <span className="text-2xl font-bold">+{pointsEarned}</span>
                  </div>
                  <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">
                    {lang === 'ru' ? 'Очков опыта' : 'Experience Points'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {nextRoomId ? (
                  <Link 
                    href={`/${lang}/rooms/${nextRoomId}`}
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {lang === 'ru' ? 'Следующая комната' : 'Next Room'}
                    <ArrowRight size={18} />
                  </Link>
                ) : (
                  <Link 
                    href={`/${lang}/rooms`}
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl transition-all"
                  >
                    {lang === 'ru' ? 'Ко всем комнатам' : 'All Rooms'}
                    <ArrowRight size={18} />
                  </Link>
                )}
                
                <button 
                  onClick={onClose}
                  className="w-full py-3 text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {lang === 'ru' ? 'Закрыть' : 'Close'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
