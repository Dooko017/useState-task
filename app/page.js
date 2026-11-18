"use client";

import { useState } from "react";
import { Counter } from "./components/Counter";
import { LightSwitch } from "./components/LightSwitch";
import { SecretMessage } from "./components/SecretMessage";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <h1 className="text-center text-3xl  font-bold ">useState</h1>
      <div className="mx-auto mt-10 max-w-4xl items-start gap-6 grid grid-cols-3 ">
        <Counter />
        <LightSwitch />
        <SecretMessage />
      </div>
    </div>
  );
}
