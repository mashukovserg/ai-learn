"use client";

import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RadarChartProps {
  data: { name: string; value: number }[];
  color: string;
  onLabelClick?: (name: string) => void;
}

export default function RadarChart({ data, color, onLabelClick }: RadarChartProps) {
  const size = 400;
  const center = size / 2;
  const radius = (size / 2) * 0.7; // Leave room for labels
  const numAxes = data.length;

  const getCoordinates = React.useCallback((index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / numAxes - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  }, [numAxes, radius, center]);

  const axisPaths = useMemo(() => {
    return data.map((_, i) => {
      const { x, y } = getCoordinates(i, 100);
      return `M${center},${center} L${x},${y}`;
    });
  }, [data, getCoordinates, center]);

  const gridLevels = [25, 50, 75, 100];
  const gridPaths = gridLevels.map((level) => {
    return data.map((_, i) => {
      const { x, y } = getCoordinates(i, level);
      return (i === 0 ? 'M' : 'L') + `${x},${y}`;
    }).join(' ') + 'Z';
  });

  const dataPath = data.map((d, i) => {
    const { x, y } = getCoordinates(i, d.value);
    return (i === 0 ? 'M' : 'L') + `${x},${y}`;
  }).join(' ') + 'Z';

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
        {/* Grids */}
        {gridPaths.map((path, i) => (
          <path
            key={`grid-${i}`}
            d={path}
            fill="none"
            stroke="#282828"
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        {axisPaths.map((path, i) => (
          <path
            key={`axis-${i}`}
            d={path}
            stroke="#282828"
            strokeWidth="1"
          />
        ))}

        {/* Data Shape */}
        <AnimatePresence mode="wait">
          <motion.path
            key={`data-path-${color}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            d={dataPath}
            fill={`${color}33`} // 20% opacity
            stroke={color}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </AnimatePresence>

        {/* Labels */}
        {data.map((d, i) => {
          const { x, y } = getCoordinates(i, 115); // Push outside
          const anchor = i === 0 || i === numAxes / 2 ? 'middle' : i < numAxes / 2 ? 'start' : 'end';
          
          return (
            <text
              key={`label-${i}`}
              x={x}
              y={y}
              fill="#737373"
              fontSize="11"
              fontWeight="500"
              textAnchor={anchor}
              dominantBaseline="middle"
              className="cursor-pointer hover:fill-white transition-colors uppercase tracking-tighter"
              onClick={() => onLabelClick?.(d.name)}
            >
              {d.name}
            </text>
          );
        })}

        {/* Data points */}
        {data.map((d, i) => {
          const { x, y } = getCoordinates(i, d.value);
          return (
            <circle
              key={`point-${i}`}
              cx={x}
              cy={y}
              r="3.5"
              fill={color}
              className="shadow-lg"
            />
          );
        })}
      </svg>
    </div>
  );
}
