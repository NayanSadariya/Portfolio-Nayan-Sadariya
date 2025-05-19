import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleMorphing from '../components/skills/ParticleMorphing';
import AlgorithmVisualizer from '../components/skills/AlgorithmVisualizer';
import ReactDemo from '../components/skills/ReactDemo';
import PythonDemo from '../components/skills/PythonDemo';
import JavaDemo from '../components/skills/JavaDemo';

const Skills: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Three.js Section */}
      <div className="bg-cream rounded-card overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-medium mb-4">Three.js & WebGL</h2>
          <p className="text-gray-700 mb-6">Interactive 3D particle system with morphing capabilities</p>
          <div className="h-[400px] bg-dark-green rounded-lg overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <OrbitControls />
              <ParticleMorphing />
            </Canvas>
          </div>
        </div>
      </div>

      {/* C++ Section */}
      <div className="bg-cream rounded-card overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-medium mb-4">C++ Algorithm Visualization</h2>
          <p className="text-gray-700 mb-6">Visual representation of sorting algorithms</p>
          <div className="h-[300px] bg-dark-green rounded-lg overflow-hidden">
            <AlgorithmVisualizer />
          </div>
        </div>
      </div>

      {/* React.js Section */}
      <div className="bg-cream rounded-card overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-medium mb-4">React.js</h2>
          <p className="text-gray-700 mb-6">Interactive component with state management</p>
          <ReactDemo />
        </div>
      </div>

      {/* Python Section */}
      <div className="bg-cream rounded-card overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-medium mb-4">Python</h2>
          <p className="text-gray-700 mb-6">Data visualization and processing</p>
          <PythonDemo />
        </div>
      </div>

      {/* Java Section */}
      <div className="bg-cream rounded-card overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-medium mb-4">Java</h2>
          <p className="text-gray-700 mb-6">Object-oriented programming demonstration</p>
          <JavaDemo />
        </div>
      </div>
    </div>
  );
};

export default Skills;