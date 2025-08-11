import { useCounterStore } from "../stores/useCounterStore";

const Counter = () => {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div className="counter">
      <h1>Count : {count}</h1>
      <div className="counter-btn">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
