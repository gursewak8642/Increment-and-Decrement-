// import "./App.js";
import { useState } from "react";
export default function App() {
  // let count = 0;
  const [count, setcount] = useState(0);
  function decreaseHandler() {
    setcount(count - 1);
  }
  function increaseHandler() {
    setcount(count + 1);
  }
  function reset() {
    setcount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344141] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-4xl">
        Increment & Decrement
      </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>

        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div>
      <button onClick={reset} className="bg-[#0398d4] text-white px-9 py-5 rounded-sm text-xl">Reset</button>
    </div>
  );
}
