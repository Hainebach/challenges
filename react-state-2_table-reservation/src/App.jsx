import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  function handleIncrease() {
    setPeople(people + 1);
  }
  function handleDecrease() {
    if (people > 0) setPeople(people - 1);
  }
  const [people, setPeople] = useState(0);
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrease={handleIncrease} onDecrease={handleDecrease} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
