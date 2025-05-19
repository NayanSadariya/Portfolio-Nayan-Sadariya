import React, { useState } from 'react';

const ReactDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300"
            placeholder="Add a todo"
          />
          <button
            onClick={addTodo}
            className="bg-medium-green text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-cream-darker p-3 rounded-lg flex justify-between items-center"
            >
              {todo}
              <button
                onClick={() => setTodos(todos.filter((_, i) => i !== index))}
                className="text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReactDemo;