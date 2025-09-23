import { useCount } from "@/context/sample";

export default function Counter() {
  const { count, toggleCount } = useCount();

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl">About</h1>
      <div className="flex flex-col items-center mt-5">
        <p>Count: {count}</p>
        <button onClick={toggleCount}
        className="border-1 bg-amber-400">Click Me</button>
      </div>
    </div>
  );
}
