"use client";

import { useEffect, useRef } from "react";
import styles from "./BackgroundCanvas.module.scss";

const CHAR_SET = ":;+-";
const CELL_WIDTH = 14;
const CELL_HEIGHT = 18;
const BASE_FONT_SIZE = 12;
const HOVER_RADIUS = 180;
const HOVER_RADIUS_SQ = HOVER_RADIUS * HOVER_RADIUS;
const WAVE_SPEED = 0.001;

export default function BackgroundCanvas() {
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

    const mouse = { x: -9999, y: -9999, active: false };
    let columns = 0;
    let rows = 0;
    let phaseOffsets: Float32Array = new Float32Array(0);
    let frameId = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.ceil(width / CELL_WIDTH);
      rows = Math.ceil(height / CELL_HEIGHT);
      phaseOffsets = new Float32Array(columns * rows);

      // Start off each character at a random point in the wave cycle
      for (let i = 0; i < phaseOffsets.length; i += 1) {
        phaseOffsets[i] = Math.random() * Math.PI * 2;
      }
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.textAlign = "center";
      context.textBaseline = "middle";

      // Time keeps increasing, which moves the wave
      const t = time * WAVE_SPEED;
      const maxCharIndex = CHAR_SET.length - 1;

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < columns; col += 1) {
          const x = col * CELL_WIDTH + CELL_WIDTH / 2;
          const y = row * CELL_HEIGHT + CELL_HEIGHT / 2;
          const index = row * columns + col;

          // Mix a few soft wave patterns together for a smooth, natural-looking movement
          const phase = phaseOffsets[index];
          const waveX = Math.sin(col * 0.36 + t + phase * 0.7);
          const waveY = Math.cos(row * 0.31 - t * 0.9 + phase * 0.4);
          const crossWave = Math.sin((col + row) * 0.18 + t * 0.65 + phase);
          const wave = (waveX + waveY + crossWave) / 3;

          // Normalize the value to a 0-1 range, then use it to pick one character from CHAR_SET
          const normalized = (wave + 1) * 0.5;
          const charIndex = Math.max(
            0,
            Math.min(maxCharIndex, Math.floor(normalized * (maxCharIndex + 1))),
          );
          const char = CHAR_SET[charIndex];

          // Controls how much the mouse affects this character
          // 1 = very close to the mouse, 0 = outside the mouse effect area
          let hoverStrength = 0;
          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const distanceSq = dx * dx + dy * dy;

            if (distanceSq < HOVER_RADIUS_SQ) {
              // Closer to the mouse = stronger effect
              const distance = Math.sqrt(distanceSq);
              hoverStrength = 1 - distance / HOVER_RADIUS;
            }
          }

          const size = BASE_FONT_SIZE + hoverStrength * 5;
          const alpha = 0.17 + hoverStrength * 0.5;

          context.font = `${size}px "Fira Code", "Courier New", monospace`;
          context.fillStyle = `rgba(160, 255, 232, ${alpha.toFixed(3)})`;
          context.fillText(char, x, y);
        }
      }

      frameId = window.requestAnimationFrame(draw);
    };

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    resize();
    frameId = window.requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
    };
  }, []);

  return (
    <div className={styles.background} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
