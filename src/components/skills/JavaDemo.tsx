import React, { useState } from 'react';

interface Shape {
  type: string;
  color: string;
}

const JavaDemo: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const colors = ['#4A8065', '#0A3B25', '#E8EDDD', '#DCBBB6'];

  const addShape = (type: string) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    setShapes([...shapes, { type, color }]);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          onClick={() => addShape('circle')}
          className="bg-medium-green text-white px-4 py-2 rounded-lg"
        >
          Add Circle
        </button>
        <button
          onClick={() => addShape('square')}
          className="bg-medium-green text-white px-4 py-2 rounded-lg"
        >
          Add Square
        </button>
        <button
          onClick={() => addShape('triangle')}
          className="bg-medium-green text-white px-4 py-2 rounded-lg"
        >
          Add Triangle
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4 p-4 bg-cream-darker rounded-lg min-h-[200px]">
        {shapes.map((shape, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            onClick={() => setShapes(shapes.filter((_, i) => i !== index))}
          >
            {shape.type === 'circle' && (
              <div
                className="w-12 h-12 rounded-full cursor-pointer"
                style={{ backgroundColor: shape.color }}
              />
            )}
            {shape.type === 'square' && (
              <div
                className="w-12 h-12 cursor-pointer"
                style={{ backgroundColor: shape.color }}
              />
            )}
            {shape.type === 'triangle' && (
              <div
                className="w-0 h-0 cursor-pointer"
                style={{
                  borderLeft: '24px solid transparent',
                  borderRight: '24px solid transparent',
                  borderBottom: `48px solid ${shape.color}`,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JavaDemo;