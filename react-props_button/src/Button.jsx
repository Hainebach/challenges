export default function Button({ color, disabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, color: "white" }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
