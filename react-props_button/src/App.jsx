import "./App.css";
import Button from "./Button.jsx";

export default function App() {
  return (
    <>
      <Button
        onClick={() => {
          console.log("button 1 clicked");
        }}
        text={"push me"}
        color={"green"}
      />
      <br />
      <Button
        onClick={() => {
          console.log("button 2 clicked");
        }}
        color={"red"}
        disabled={true}
        text={"you can't push me"}
      />
      <br />
      <Button
        onClick={() => {
          console.log("button 3 clicked");
        }}
        color={"green"}
        text={"push me"}
      />
    </>
  );
}
