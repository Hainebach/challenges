import "./App.css";
import Button from "./Button.jsx";

export default function App() {
  return (
    <>
      <Button color={"blue"} text={"push me"} />
      <br />
      <Button color={"red"} text={"you can't push me"} disabled={true} />
      <br />
      <Button color={"green"} text={"push me"} />
    </>
  );
}
