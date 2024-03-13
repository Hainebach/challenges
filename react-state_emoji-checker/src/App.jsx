import "./App.css";
import { useState } from "react";

export default function App() {
  const validCode = "🐡🐠🐋";
  const [emoji, setEmoji] = useState("");

  function HandleClick(emoji) {
    console.log(emoji);
    setEmoji((x) => x + emoji);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            HandleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            HandleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            HandleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setEmoji("");
        }}
      >
        Reset
      </button>
      <h2>{emoji}</h2>

      {emoji === validCode && <p>Valid code!</p>}
    </div>
  );
}
