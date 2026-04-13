import { useEffect, useState } from "react";

export function HeroBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(3, 17, 32, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 4, 7, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow que segue o mouse */}
      <div
        className="pointer-events-none absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(4, 90, 182, 0.92), transparent 70%)",
          transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
        }}
      />
    </div>
  );
}