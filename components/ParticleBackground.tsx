import { motion } from "framer-motion";
import { useMemo } from "react";

const ParticleBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2, // Tamaños entre 2px y 6px
        x: (Math.random() - 0.5) * 200, // Mayor desplazamiento
        y: (Math.random() - 0.5) * 150, // Movimiento más amplio
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-purple-400 rounded-full opacity-80"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            x: [0, p.x, 0],
            y: [0, p.y, 0],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
