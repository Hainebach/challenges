import "./App.css";

export default function App() {
  return <Greeting name="Coach" />;
}

function Greeting({ name }) {
  return <h1>{name === "Coach" ? "Hello, Coach" : "hello " + name}</h1>;
}
