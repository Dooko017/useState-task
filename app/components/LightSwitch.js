"use client";

import { useState } from "react";

export const LightSwitch = () => {
  const [IsOn, setIsOn] = useState(false);

  return (
    <div
      className={` rounded-xl p-5 text-center shadow-sm ${IsOn ? "bg-yellow-100 text-gray-900" : "bg-slate-800 text-white"}`}
    >
      <h3 className="font-bold mb-5"> 💡 Гэрэл </h3>
      <p className="text-5xl mb-5"> {IsOn ? "💡" : "🌑"} </p>
      <button
        className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-xl"
        onClick={() => setIsOn(!IsOn)}
      >
        {IsOn ? "Унтраах" : "Асаах"}
      </button>
    </div>
  );
};
