import React from 'react';
import { Rnd } from 'react-rnd';

const DraggableCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 350,
        height: 'auto'
      }}
      minWidth={250}
      bounds="window"
      enableResizing={{ bottom: true, right: true, bottomRight: true }}
      className="bg-white rounded-xl shadow-md border border-gray-300 overflow-hidden"
    >
      <div className="w-full h-full p-3">{children}</div>
    </Rnd>
  );
};

export default DraggableCard;
