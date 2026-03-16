"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, X } from 'lucide-react';

interface RoomSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: string;
  roomTitle: string;
  taskCount: number;
}

export default function RoomSuccessModal({
  isOpen,
  onClose,
  lang,
  roomTitle,
  taskCount,
}: RoomSuccessModalProps) {
  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const pointsEarned = taskCount * 10;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              className="relative bg-[#141414] border border-[#303030] rounded-2xl p-8 w-full max-w-md pointer-events-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-neutral-600 hover:text-neutral-300 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-bold text-center mb-2">
                {lang === 'ru' ? 'Комната пройдена!' : 'Room Complete!'}
              </h2>
              <p className="text-neutral-500 text-center text-sm mb-6">
                {roomTitle}
              </p>

              {/* Stats row */}
              <div className="flex justify-center gap-6 mb-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-400">{taskCount}</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                    {lang === 'ru' ? 'Заданий' : 'Tasks'}
                  </p>
                </div>
                <div className="w-px bg-[#262626]" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-400">+{pointsEarned}</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                    {lang === 'ru' ? 'Очков' : 'Points'}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <Link
                  href={`/${lang}/rooms`}
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm py-3 px-5 rounded-xl transition-colors"
                  onClick={onClose}
                >
                  {lang === 'ru' ? 'К другим комнатам' : 'Explore More Rooms'}
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={onClose}
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors py-2"
                >
                  {lang === 'ru' ? 'Остаться в комнате' : 'Stay in this room'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
