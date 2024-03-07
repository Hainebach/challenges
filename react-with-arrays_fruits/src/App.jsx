import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1220,
      name: "🍊 Orange",
      color: "orange",
      family: "citrus",
    },
    {
      id: 1340,
      name: "🍉 Watermelon",
      color: "green",
      family: "gourd",
    },
    {
      id: 1410,
      name: "🥝 Kiwi",
      color: "brown",
      family: "actinidiaceae",
    },
    {
      id: 1230,
      name: "🍋 Lemon",
      color: "yellow",
      family: "citrus",
    },
    {
      id: 1102,
      name: "Fig",
      color: "purple",
      family: "mullberry",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
