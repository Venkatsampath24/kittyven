import { useEffect, useRef } from "react";

export default function FireworksCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    let animationFrameId;

    let fireworks = [];

    const createFirework = () => {
      const x = Math.random() * width;
      const y = Math.random() * height * 0.5;
      const hue = Math.random() * 360;

      const particles = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          radius: 2 + Math.random(),
          decay: 0.015 + Math.random() * 0.01,
          hue,
        });
      }

      fireworks.push(...particles);
    };

    const draw = () => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.3)";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      fireworks.forEach((p, i) => {
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.vy += 0.05; // gravity
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          fireworks.splice(i, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.alpha})`;
        ctx.fill();
      });

      if (fireworks.length < 100) {
        createFirework();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      fireworks = [];
      ctx.clearRect(0, 0, width, height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
