import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <div className=" w-full h-screen flex flex-col justify-center items-center  bg-black text-white space-y-10">
      <h1 className="text-4xl">Counter</h1>
        <h1 className="text-8xl">{count}</h1>

        <div className="flex space-x-4">
          <button
            onClick={increment}
            className="bg-blue-600 text-white font-semibold py-2 px-8 rounded text-center hover:bg-blue-700"
          >
            +
          </button>
          <button
            onClick={decrement}
            className="bg-blue-600 text-white font-semibold py-2 px-8 rounded text-center hover:bg-blue-700"
          >
            -
          </button>

          <button onClick={reset} className="bg-blue-600 text-white font-semibold py-2 px-6 rounded text-center hover:bg-red-700">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
