import "./styles.css";
import useCounter from "./UseCounter";

export default function App() {
  const { counter, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
