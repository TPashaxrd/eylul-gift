import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";
import { PiFlowerTulip } from "react-icons/pi";

type ParticleType = "heart" | "gift" | "star" | "flower";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotate: number;
  type: ParticleType;
  direction: number;
  opacity: number;
  speed: number;
  glow: boolean;
};

const particleTypes: ParticleType[] = ["heart", "gift", "star", "flower"];

const colors = {
  heart: ["#e0245e", "#ff3366", "#ff5c8d", "#ff2a68"],
  gift: ["#ffb347", "#ffd27f", "#ffc107"],
  star: ["#fff7c0", "#fff3b0", "#fff9df"],
  flower: ["#ff94c2", "#ff77b7", "#ff4d8a"],
};

export default function LoveParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const interval = setInterval(() => {
      if (particles.length > 50) return;

      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      const newParticle: Particle = {
        id: idCounter++,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 60,
        size: 20 + Math.random() * 25,
        rotate: Math.random() * 360,
        type,
        direction: Math.random() > 0.5 ? 1 : -1,
        opacity: 0.7 + Math.random() * 0.3,
        speed: 7 + Math.random() * 3,
        glow: Math.random() > 0.6,
      };

      setParticles((old) => [...old, newParticle]);
    }, 120);

    return () => clearInterval(interval);
  }, [particles.length]);

  const renderIcon = (type: ParticleType, size: number, color: string) => {
    const iconProps = { size, color, style: { filter: "drop-shadow(0 0 3px rgba(0,0,0,0.15))" } };
    switch (type) {
      case "heart": return <FaHeart {...iconProps} />;
      case "gift": return <GiFlatTire {...iconProps} />;
      case "star": return <FaStar {...iconProps} />;
      case "flower": return <PiFlowerTulip {...iconProps} />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map(({ id, x, y, size, rotate, type, direction, opacity, speed, glow }) => {
          const colorPalette = colors[type];
          const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

          return (
            <motion.div
              key={id}
              initial={{ y, opacity, rotate, x }}
              animate={{
                y: -120,
                opacity: [opacity, glow ? 1 : opacity, 0],
                rotate: [rotate, rotate + 180, rotate + 360],
                x: [
                  x,
                  x + direction * 30,
                  x + direction * 60,
                  x + direction * 30,
                  x
                ],
                scale: [1, 1.3, 1.1, 1.4, 1],
                filter: glow ? [
                  "drop-shadow(0 0 5px " + color + ")",
                  "drop-shadow(0 0 12px " + color + ")",
                  "drop-shadow(0 0 5px " + color + ")"
                ] : undefined
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: speed,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
              onAnimationComplete={() => setParticles((old) => old.filter((p) => p.id !== id))}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                fontSize: size,
                userSelect: "none",
                pointerEvents: "none",
                color,
                textShadow: glow ? `0 0 12px ${color}` : undefined,
              }}
              className="flex items-center justify-center"
            >
              {renderIcon(type, size, color)}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
