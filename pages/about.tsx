import { useCount } from '@/context/sample';

export default function Counter()  {
    const {count, toggleCount} = useCount();

  return (
    <div>
      <h1>About</h1>
    <p>Count: {count}</p>
    <button  onClick={toggleCount}>
      Click Me
    </button>
    </div>
  );

};

