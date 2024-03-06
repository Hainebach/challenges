import "./App.css";

export default function App() {
  return <Greeting name="Jan" />;
}

function Greeting({ name }) {
  const coach = ["Jan", "Sven", "Klaus"];
  return <h1>{coach.includes(name) ? "Hello, Coach" : "hello " + name}</h1>;
}
