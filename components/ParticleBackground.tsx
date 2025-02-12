import { motion } from "framer-motion";
import { useMemo } from "react";

interface ParticleBackgroundProps {
  particleCount?: number;
  particleColor?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 20,  // Reducido a 20 partículas
  particleColor = '#a78bfa'  // Color más suave
}) => {
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1, // Tamaño más pequeño (1px a 4px)
        x: (Math.random() - 0.5) * 100, // Movimiento más suave
        y: (Math.random() - 0.5) * 50,  // Menor rango de movimiento
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3, // Animación más rápida
      })),
    [particleCount]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: particleColor,
            opacity: 0.4 // Opacidad reducida
          }}
          animate={{
            x: [0, p.x, 0],
            y: [0, p.y, 0],
            opacity: [0.6, 0.2, 0.6] // Variación de opacidad más suave
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