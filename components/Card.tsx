"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  features: string[];
  cost: string;
  className?: string;
  icon?: React.ElementType;
  accentColor?: string;
  hoverEffect?: 'shine' | 'float';
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  features,
  cost,
  className = '',
  icon: Icon = Sparkles,
  accentColor = '#06b6d4',
  hoverEffect = 'shine',
}) => {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${accentColor}30 0%, #3b82f620 100%)`,
  };

  return (
    <motion.div
      className={`group relative w-full max-w-2xl p-px rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}
      style={gradientStyle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#ffffff10_0%,transparent_70%)]" />
        {hoverEffect === 'shine' && (
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: [-500, 500],
              transition: { duration: 3, repeat: Infinity }
            }}
          />
        )}
      </div>
      <div className="relative h-full bg-slate-950/95 backdrop-blur-sm rounded-2xl p-8 flex flex-col border border-white/5">
        <motion.div
          className="flex justify-center items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-white/5 mb-6 mx-auto"
          whileHover={{ rotate: 15, scale: 1.1 }}
        >
          <Icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
        </motion.div>
        <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="mt-4 text-sm text-gray-400 text-center leading-relaxed min-h-[72px]">
          {description}
        </p>
        <ul className="mt-6 space-y-3 flex-1">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-default"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-sm text-gray-200">{feature}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-cyan-400">{cost}</span>
              <span className="text-xs text-gray-400">por mes</span>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              initial={{
                x: Math.random() * 100 - 50 + '%',
                y: Math.random() * 100 - 50 + '%',
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                },
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;