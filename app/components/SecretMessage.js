"use client";

import { useState } from "react";

export const SecretMessage = () => {
  const [IsVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 text-center">
      <h3 className="font-bold mb-5"> 🔒 Нууц мессеж </h3>
      <p className="text-5xl mb-5">{IsVisible ? "🔓" : "🔒"} </p>
      <button
        className="bg-purple-500 text-white  font-bold px-5 py-2 rounded-xl"
        onClick={() => setIsVisible(!IsVisible)}
      >
        {IsVisible ? "Нуух " : "Харах"}
      </button>
      {IsVisible && (
        <p className="bg-purple-100 rounded-xl p-3 mt-4 text-sm ">
          {" "}
          🎉 Чи useState-ийг ойлголоо{" "}
        </p>
      )}
    </div>
  );
};
