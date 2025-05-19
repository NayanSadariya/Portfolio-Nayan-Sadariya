import React, { useState, useEffect } from 'react';

const AlgorithmVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
  };

  const bubbleSort = async () => {
    setSorting(true);
    const arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      }
    }
    setSorting(false);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between p-4">
        <button
          onClick={generateArray}
          disabled={sorting}
          className="bg-medium-green text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Generate New Array
        </button>
        <button
          onClick={bubbleSort}
          disabled={sorting}
          className="bg-medium-green text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Sort
        </button>
      </div>
      <div className="flex-1 flex items-end justify-center gap-1 p-4">
        {array.map((value, index) => (
          <div
            key={index}
            style={{ height: `${value}%` }}
            className="w-1 bg-medium-green"
          />
        ))}
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;