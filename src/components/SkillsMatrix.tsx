"use client";

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Info, Sparkles, CheckCircle2, Clock, Lock } from 'lucide-react';
import Link from 'next/link';
import { ROLES, RoleId, ROLE_STYLES, calculateSkillScores, calculateTotalScore, getSkillRecommendations, roleHasContent } from '@/data/skills';
import RadarChart from './RadarChart';

export default function SkillsMatrix({ lang }: { lang: string }) {
  const [selectedRole, setSelectedRole] = useState<RoleId>('foundational');
  const [lastSelectedSkill, setLastSelectedSkill] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Listen for progress updates (cross-component reactivity)
  useEffect(() => {
    const refresh = () => setRefreshKey(k => k + 1);
    window.addEventListener('storage', refresh);
    window.addEventListener('progress-updated', refresh);
    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener('progress-updated', refresh);
    };
  }, []);

  // Force re-read from localStorage on mount (SSR hydration safety)
  useEffect(() => {
    setRefreshKey(1);
  }, []);

  const role = useMemo(() => ROLES.find(r => r.id === selectedRole)!, [selectedRole]);
  const styles = useMemo(() => ROLE_STYLES[selectedRole], [selectedRole]);
  const hasContent = useMemo(() => roleHasContent(selectedRole), [selectedRole]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scores = useMemo(() => calculateSkillScores(selectedRole), [selectedRole, refreshKey]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const totalScore = useMemo(() => calculateTotalScore(selectedRole), [selectedRole, refreshKey]);

  const chartData = useMemo(
    () => role.skills.map(s => ({ name: s.name, value: scores[s.slug] ?? 0 })),
    [role, scores]
  );

  const selectedSkillSlug = useMemo(() => {
    if (!lastSelectedSkill) return null;
    return role.skills.find(s => s.name === lastSelectedSkill)?.slug ?? null;
  }, [lastSelectedSkill, role]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const recommendations = useMemo(
    () => selectedSkillSlug ? getSkillRecommendations(selectedSkillSlug) : [],
    [selectedSkillSlug, refreshKey]
  );

  const handleLabelClick = useCallback((name: string) => {
    setLastSelectedSkill(name);
  }, []);

  return (
    <div className="flex bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl overflow-hidden min-h-[600px] shadow-2xl">
      {/* Sidebar */}
      <aside className="w-[200px] border-r border-[#1a1a1a] bg-[#0d0d0d] p-4 flex flex-col gap-2 shrink-0">
        <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest px-3 mb-2">
          {lang === 'ru' ? 'Выбор роли' : 'Select Role'}
        </h4>
        {ROLES.map((r) => {
          const isActive = selectedRole === r.id;
          const Icon = r.icon;
          const rs = ROLE_STYLES[r.id];

          return (
            <button
              key={r.id}
              onClick={() => { setSelectedRole(r.id); setLastSelectedSkill(null); }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                isActive
                  ? 'border'
                  : 'text-neutral-500 hover:text-neutral-300 hover:bg-white/5 border border-transparent'
              }`}
              style={isActive ? { backgroundColor: rs.bg10, color: rs.text, borderColor: rs.border30, boxShadow: rs.shadow } : undefined}
            >
              <Icon
                size={18}
                className={isActive ? '' : 'text-neutral-600 group-hover:text-neutral-400 transition-colors'}
                style={isActive ? { color: rs.text } : undefined}
              />
              <span className="text-xs font-semibold tracking-tight">{r.name[lang as 'en' | 'ru']}</span>
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="ml-auto w-1 h-3 rounded-full"
                  style={{ backgroundColor: rs.solid }}
                />
              )}
            </button>
          );
        })}
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-8 flex flex-col relative overflow-hidden">
        {/* Background glow based on role */}
        <div
          className="absolute -top-[10%] -right-[10%] w-[400px] h-[400px] blur-[120px] opacity-20 transition-colors duration-1000 rounded-full"
          style={{ backgroundColor: role.accentColor }}
        />

        {/* Header */}
        <div className="flex justify-between items-start mb-12 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-2">
              <span className="font-bold uppercase tracking-widest" style={{ color: styles.text }}>
                {role.name[lang as 'en' | 'ru']}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              {role.name[lang as 'en' | 'ru']}
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: styles.solid, boxShadow: `0 0 8px ${styles.bg10}` }}
              />
            </h1>
            <p className="text-neutral-500 text-sm max-w-md">
              {lang === 'ru'
                ? 'Выберите навык, чтобы увидеть, какие модули нужно пройти для повышения уровня'
                : 'Select a skill to see which modules to complete to upskill'}
            </p>
          </div>

          {/* Total Score */}
          <div
            className="p-4 rounded-2xl flex items-center gap-4 shrink-0"
            style={{ backgroundColor: `${styles.bg10}`, border: `1px solid ${styles.bg10}` }}
          >
            <div className="text-right">
              <p
                className="text-[10px] uppercase font-black tracking-widest leading-none mb-1"
                style={{ color: styles.text, opacity: 0.7 }}
              >
                {lang === 'ru' ? 'Общий прогресс' : 'Total Score'}
              </p>
              <p className="text-2xl font-black text-white leading-none">{totalScore}%</p>
            </div>
            <div
              className="w-10 h-10 rounded-full relative"
              style={{
                background: `conic-gradient(${styles.solid} ${totalScore * 3.6}deg, transparent 0deg)`,
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #fff calc(100% - 4px))',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #fff calc(100% - 4px))',
              }}
            />
          </div>
        </div>

        {/* Coming soon overlay for roles without content */}
        {!hasContent ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 relative z-10">
            <Lock size={48} className="text-neutral-700" />
            <p className="text-neutral-500 text-lg font-semibold">
              {lang === 'ru' ? 'Скоро появится' : 'Coming Soon'}
            </p>
            <p className="text-neutral-600 text-sm max-w-sm text-center">
              {lang === 'ru'
                ? 'Модули для этой роли ещё в разработке. Начните с раздела «Основы»!'
                : 'Modules for this role are still in development. Start with the Foundational track!'}
            </p>
          </div>
        ) : (
          /* Matrix Visualization */
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
            <div className="w-full max-w-[450px]">
              <RadarChart
                data={chartData}
                color={role.accentColor}
                onLabelClick={handleLabelClick}
              />
            </div>

            <div className="w-full lg:w-[320px] flex flex-col gap-4 self-stretch">
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 flex flex-col">
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Target size={14} style={{ color: styles.text }} />
                  {lang === 'ru' ? 'Акцент навыка' : 'Skill Focus'}
                </h3>

                <AnimatePresence mode="wait">
                  {lastSelectedSkill ? (
                    <motion.div
                      key={lastSelectedSkill}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex flex-col gap-3"
                    >
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-bold text-neutral-200">{lastSelectedSkill}</span>
                        <span className="text-xl font-black" style={{ color: styles.text }}>
                          {Math.round(chartData.find(d => d.name === lastSelectedSkill)?.value || 0)}%
                        </span>
                      </div>
                      <div className="h-1 bg-black rounded-full overflow-hidden">
                        <motion.div
                          className="h-full"
                          style={{ backgroundColor: styles.solid }}
                          initial={{ width: 0 }}
                          animate={{ width: `${chartData.find(d => d.name === lastSelectedSkill)?.value || 0}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>

                      <div className="mt-4 space-y-2">
                        <p className="text-[11px] text-neutral-500 uppercase tracking-tighter font-bold">
                          {lang === 'ru' ? 'Рекомендуемые модули' : 'Recommended Modules'}
                        </p>
                        {recommendations.length === 0 ? (
                          <p className="text-xs text-neutral-600 italic py-2">
                            {lang === 'ru' ? 'Нет связанных модулей' : 'No linked modules'}
                          </p>
                        ) : (
                          recommendations.map(rec => (
                            <Link
                              key={rec.roomId}
                              href={`/${lang}/room/${rec.roomId}`}
                              className="flex items-center justify-between p-2 rounded-lg bg-[#0d0d0d] border border-white/5 group cursor-pointer transition-colors"
                              style={{ ['--hover-border' as string]: styles.border30 }}
                              onMouseEnter={e => (e.currentTarget.style.borderColor = styles.border30)}
                              onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
                            >
                              <span className="text-xs text-neutral-400 group-hover:text-neutral-200 truncate mr-2">
                                {rec.title[lang as 'en' | 'ru']}
                              </span>
                              {rec.status === 'completed' ? (
                                <CheckCircle2 size={14} style={{ color: styles.solid }} className="shrink-0" />
                              ) : rec.status === 'in-progress' ? (
                                <span className="text-[10px] font-bold text-amber-400 shrink-0">{rec.completionPercent}%</span>
                              ) : (
                                <Clock size={12} className="text-neutral-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                              )}
                            </Link>
                          ))
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Info size={32} className="text-neutral-800 mb-3" />
                      <p className="text-xs text-neutral-600 italic">
                        {lang === 'ru' ? 'Нажмите на ось, чтобы увидеть детали' : 'Click an axis to see details'}
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-auto bg-gradient-to-br from-[#141414] to-black border border-white/5 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: styles.bg10, border: `1px solid ${styles.border30}` }}
                  >
                    <Sparkles size={16} style={{ color: styles.text }} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-white uppercase tracking-wider">Career Outlook</h4>
                    <p className="text-[10px] text-neutral-500">2026-2028 Trends</p>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed italic">
                  &ldquo;{lang === 'ru'
                    ? 'Рост спроса на этот профиль ожидается на уровне 22% ежегодно в сегменте AI-driven инфраструктуры.'
                    : 'Demand for this profile is projected to grow by 22% annually in the AI-driven infrastructure sector.'}&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
