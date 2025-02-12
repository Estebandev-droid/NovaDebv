// components/MarsIcon.tsx
"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const MarsIcon = () => {
  const scale = useMotionValue(1);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotate3D = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) => -(y - 20) * 0.5 + (x - 20) * 0.5
  );

  const glowIntensity = useTransform(scale, [1, 1.2], [0.3, 0.6]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const container = document.querySelector('.mars-container') as HTMLElement | null;
    container?.addEventListener('mousemove', handleMouseMove as EventListener);
    
    return () => container?.removeEventListener('mousemove', handleMouseMove as EventListener);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="mars-container relative flex items-center justify-center group cursor-pointer"
      style={{ rotate: rotate3D, scale }}
      onHoverStart={() => scale.set(1.2)}
      onHoverEnd={() => scale.set(1)}
    >
      {/* Halo de energía */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/40 to-orange-500/20 blur-xl"
        style={{ opacity: glowIntensity }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Partículas orbitales */}
      <motion.div 
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              transform: `
                translate(-50%, -50%) 
                rotate(${i * 120}deg) 
                translateX(24px)
              `,
              filter: "blur(1px)"
            }}
          />
        ))}
      </motion.div>

      {/* Planeta Marte */}
      <motion.svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_0_20px_rgba(255,80,80,0.4)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="24" cy="24" r="23" fill="url(#marsGradient)" />
        
        {/* Detalles de superficie animados */}
        <motion.path 
          d="M14 15C14.5 16 16 16.5 17 15.5"
          stroke="#FF6B6B"
          strokeWidth="0.8"
          strokeLinecap="round"
          animate={{
            pathLength: [0.8, 1, 0.8],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <motion.path
          d="M22 12C23 12.5 24 13.5 23.5 15"
          stroke="#FF8E8E"
          strokeWidth="0.6"
          strokeLinecap="round"
          animate={{
            d: [
              "M22 12C23 12.5 24 13.5 23.5 15",
              "M22 11.5C23.2 12.2 24 13.8 23 15.2",
              "M22 12C23 12.5 24 13.5 23.5 15"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <motion.path
          d="M26 18C27 19 28 20 27 22"
          stroke="#FF5555"
          strokeWidth="0.7"
          strokeLinecap="round"
          animate={{
            strokeWidth: [0.7, 0.9, 0.7]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Anillos atmosféricos */}
        <motion.circle
          cx="24"
          cy="24"
          r="23.5"
          stroke="url(#atmosphereGradient)"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          strokeLinecap="round"
          animate={{
            strokeDashoffset: [0, 10],
            rotate: [0, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <defs>
          <linearGradient
            id="marsGradient"
            x1="0"
            y1="0"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF4D4D" />
            <stop offset="0.5" stopColor="#CC3D3D" />
            <stop offset="1" stopColor="#992D2D" />
          </linearGradient>

          <radialGradient
            id="atmosphereGradient"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(24 24) rotate(90) scale(24)"
          >
            <stop stopColor="#4FACFF" stopOpacity="0.6" />
            <stop offset="0.5" stopColor="#4FC1FF" stopOpacity="0.3" />
            <stop offset="1" stopColor="#4FACFF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </motion.svg>

      {/* Efecto de pulso energético */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-red-400/30"
        animate={{
          scale: [1, 1.4],
          opacity: [0.4, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </motion.div>
  );
};

export default MarsIcon;