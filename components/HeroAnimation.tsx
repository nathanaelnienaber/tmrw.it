"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 200;
const PARTICLE_COLOR = "#4AB2F7";
const BACKGROUND_COLOR = "#0E0E0E";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
    }));

    let animationFrameId: number | null = null;
    let width = 0;
    let height = 0;
    const maxVelocity = 0.18;
    const connectionDistance = 120;

    const initParticles = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);

      context.fillStyle = BACKGROUND_COLOR;
      context.fillRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x = Math.random() * width;
        particle.y = Math.random() * height;
        particle.vx = (Math.random() - 0.5) * maxVelocity;
        particle.vy = (Math.random() - 0.5) * maxVelocity;
      }
    };

    const draw = () => {
      context.fillStyle = BACKGROUND_COLOR;
      context.fillRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(width, particle.x));
        }
        if (particle.y <= 0 || particle.y >= height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(height, particle.y));
        }

        context.beginPath();
        context.shadowColor = "rgba(74, 178, 247, 0.4)";
        context.shadowBlur = 10;
        context.arc(particle.x, particle.y, 2.1, 0, Math.PI * 2);
        context.fillStyle = PARTICLE_COLOR;
        context.globalAlpha = 0.85;
        context.fill();
        context.shadowBlur = 0;
      }

      context.globalAlpha = 0.35;
      context.strokeStyle = PARTICLE_COLOR;
      context.lineWidth = 0.6;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const particleA = particles[i];
          const particleB = particles[j];
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            context.globalAlpha = opacity * 0.5;
            context.beginPath();
            context.moveTo(particleA.x, particleA.y);
            context.lineTo(particleB.x, particleB.y);
            context.stroke();
          }
        }
      }

      context.globalAlpha = 1;
      animationFrameId = window.requestAnimationFrame(draw);
    };

    initParticles();
    draw();

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      className="relative isolate flex aspect-square w-full max-w-xl items-center justify-center overflow-hidden rounded-2xl border border-electricBlue/20 bg-[#0E0E0E] p-6 shadow-[0_40px_120px_-60px_rgba(74,178,247,0.45)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,178,247,0.25),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-electricBlue/10 via-transparent to-transparent" />
      <canvas ref={canvasRef} className="relative h-full w-full rounded-[1.5rem]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/0 via-[#0E0E0E]/10 to-[#0E0E0E]/40" />
    </div>
  );
}
