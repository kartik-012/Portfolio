import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  baseAlpha: number;
  color: string;
  pulsePhase: number;
}

interface Signal {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null; targetX: number; targetY: number }>({
    x: null,
    y: null,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const nodeCount = Math.floor((width * height) / 11000);
    const nodes: Node[] = [];
    const colors = [
      "rgba(244, 63, 94, ", // Crimson / Ruby
      "rgba(251, 113, 133, ", // Soft Rose
      "rgba(168, 85, 247, ", // Violet / Neural Purple
      "rgba(236, 72, 153, ", // Pink Neon
    ];

    for (let i = 0; i < Math.max(nodeCount, 55); i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: (Math.random() - 0.5) * 320,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        vz: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 1.2,
        baseAlpha: Math.random() * 0.45 + 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const signals: Signal[] = [];
    const maxDistance = 140;

    let smoothTiltX = 0;
    let smoothTiltY = 0;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseRef.current.x = clientX;
      mouseRef.current.y = clientY;
      mouseRef.current.targetX = (clientX - width / 2) * 0.08;
      mouseRef.current.targetY = (clientY - height / 2) * 0.08;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    window.addEventListener("resize", handleResize);
    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    // Random signal spawner
    const signalInterval = setInterval(() => {
      if (nodes.length > 2 && Math.random() > 0.3) {
        const from = Math.floor(Math.random() * nodes.length);
        for (let j = 0; j < nodes.length; j++) {
          if (from === j) continue;
          const dx = nodes[from].x - nodes[j].x;
          const dy = nodes[from].y - nodes[j].y;
          const dz = nodes[from].z - nodes[j].z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist3D < maxDistance * 1.1) {
            signals.push({
              fromNode: from,
              toNode: j,
              progress: 0,
              speed: 0.016 + Math.random() * 0.02,
            });
            break;
          }
        }
      }
    }, 180);

    let time = 0;
    const fov = 460;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Smooth camera tilt towards mouse
      smoothTiltX += (mouseRef.current.targetX - smoothTiltX) * 0.05;
      smoothTiltY += (mouseRef.current.targetY - smoothTiltY) * 0.05;

      const centerX = width / 2;
      const centerY = height / 2;

      // Projected coordinates storage
      const projX = new Float32Array(nodes.length);
      const projY = new Float32Array(nodes.length);
      const projScale = new Float32Array(nodes.length);

      // Update 3D nodes physics & calculate perspective projection
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;

        // Bounce inside 3D volume
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        if (n.z < -180 || n.z > 180) n.vz *= -1;

        // 3D perspective projection
        const scale = fov / (fov + n.z);
        projScale[i] = scale;
        projX[i] = centerX + (n.x - centerX) * scale + smoothTiltX * (n.z / 140);
        projY[i] = centerY + (n.y - centerY) * scale + smoothTiltY * (n.z / 140);

        // Mouse 3D repulsion
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const mdx = mouseRef.current.x - projX[i];
          const mdy = mouseRef.current.y - projY[i];
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 170) {
            const force = (170 - mDist) / 170;
            n.x -= (mdx / mDist) * force * 1.5;
            n.y -= (mdy / mDist) * force * 1.5;
            n.z += (force * 1.2 * (n.z > 0 ? 1 : -1));
          }
        }
      }

      // Draw 3D synaptic connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < maxDistance) {
            const avgScale = (projScale[i] + projScale[j]) * 0.5;
            const alpha = (1 - dist3D / maxDistance) * 0.32 * avgScale;
            ctx.beginPath();
            ctx.moveTo(projX[i], projY[i]);
            ctx.lineTo(projX[j], projY[j]);
            ctx.strokeStyle = `rgba(244, 63, 94, ${Math.min(alpha, 0.45)})`;
            ctx.lineWidth = Math.max(0.6, 1.2 * avgScale);
            ctx.stroke();
          }
        }

        // Interactive mouse synapse
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const mdx = mouseRef.current.x - projX[i];
          const mdy = mouseRef.current.y - projY[i];
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 150) {
            const alpha = (1 - mDist / 150) * 0.5 * projScale[i];
            ctx.beginPath();
            ctx.moveTo(projX[i], projY[i]);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(251, 113, 133, ${alpha})`;
            ctx.lineWidth = 1.3 * projScale[i];
            ctx.stroke();
          }
        }
      }

      // Draw 3D glowing nodes sorted by depth
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(time + n.pulsePhase) * 0.28 + 0.72;
        const scale = projScale[i];
        const currentAlpha = n.baseAlpha * pulse * scale;

        ctx.beginPath();
        ctx.arc(projX[i], projY[i], Math.max(1, n.radius * pulse * scale), 0, Math.PI * 2);
        ctx.fillStyle = `${n.color}${Math.min(currentAlpha, 0.95)})`;
        ctx.shadowColor = `${n.color}0.85)`;
        ctx.shadowBlur = Math.max(4, 10 * scale);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Update and draw 3D signal pulses (flowing tokens)
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          signals.splice(s, 1);
          continue;
        }

        const xA = projX[sig.fromNode];
        const yA = projY[sig.fromNode];
        const xB = projX[sig.toNode];
        const yB = projY[sig.toNode];
        const scale = (projScale[sig.fromNode] + projScale[sig.toNode]) * 0.5;

        const sx = xA + (xB - xA) * sig.progress;
        const sy = yA + (yB - yA) * sig.progress;

        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(1.5, 2.8 * scale), 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
        ctx.shadowColor = "rgba(244, 63, 94, 1)";
        ctx.shadowBlur = 14 * scale;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(signalInterval);
      window.removeEventListener("resize", handleResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full opacity-75 transition-opacity duration-1000"
    />
  );
}
