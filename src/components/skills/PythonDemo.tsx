import React, { useEffect, useRef } from 'react';

const PythonDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const dataPoints: { x: number; y: number }[] = [];

    const animate = () => {
      ctx.clearRect(0, 0, 600, 300);
      
      // Draw axes
      ctx.beginPath();
      ctx.moveTo(50, 250);
      ctx.lineTo(550, 250); // x-axis
      ctx.moveTo(50, 250);
      ctx.lineTo(50, 50);  // y-axis
      ctx.strokeStyle = '#4A8065';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Add new data point
      const x = time * 2;
      const y = 150 + Math.sin(time * 0.5) * 50 + Math.cos(time * 0.3) * 30;
      
      dataPoints.push({ x: x + 50, y });
      if (dataPoints.length > 250) dataPoints.shift();

      // Draw data points with gradient
      ctx.beginPath();
      ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
      
      for (let i = 1; i < dataPoints.length; i++) {
        const { x, y } = dataPoints[i];
        ctx.lineTo(x, y);
      }

      const gradient = ctx.createLinearGradient(50, 0, 550, 0);
      gradient.addColorStop(0, '#4A8065');
      gradient.addColorStop(1, '#0A3B25');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw points
      dataPoints.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#0A3B25';
        ctx.fill();
      });

      time += 0.1;
      if (time * 2 > 500) time = 0;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center">
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        className="bg-white rounded-lg shadow-lg"
      />
    </div>
  );
};

export default PythonDemo;