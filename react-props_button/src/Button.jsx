export default function Button({ color, disabled, text }) {
  return (
    <button style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}
