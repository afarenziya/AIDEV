import { useEffect, useRef } from "react";
import { getRandomInt } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      }
    };

    const createParticle = (): Particle => {
      const colors = ["rgba(63, 0, 255, 0.3)", "rgba(0, 255, 255, 0.3)", "rgba(255, 0, 255, 0.3)"];
      return {
        x: getRandomInt(0, canvas.width),
        y: getRandomInt(0, canvas.height),
        size: getRandomInt(1, 3),
        speedX: getRandomInt(-100, 100) / 100,
        speedY: getRandomInt(-100, 100) / 100,
        color: colors[getRandomInt(0, 2)]
      };
    };

    const initParticles = () => {
      const particlesCount = Math.floor(window.innerWidth / 20); // adjust for performance
      particlesRef.current = Array.from({ length: particlesCount }, () => createParticle());
    };

    const drawParticles = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((particle, index) => {
        // Draw the particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect particles that are close to each other
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 - (distance / 1500)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce on edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }
      });

      animationFrame = requestAnimationFrame(drawParticles);
      animationFrameRef.current = animationFrame;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-50"
    />
  );
};

export default ParticleBackground;
