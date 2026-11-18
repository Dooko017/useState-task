"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-white  rounded-xl shadow-sm p-5 text-center">
      <h3 className="font-bold mb-5">🔢 Тоолуур</h3>
      <p className="text-5xl  font-bold mb-5">{count} </p>
      <div className="flex justify-center gap-3">
        <button
          className="bg-slate-900 text-white  w-10 h-10 rounded-full font-bold"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="bg-slate-900 text-white  w-10 h-10 rounded-full font-bold"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};
