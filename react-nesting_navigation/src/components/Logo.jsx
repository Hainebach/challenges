import logo from "/Users/yoavhainebach/spiced/spiced-bootcamp/challenges/react-nesting_navigation/src/assets/logo.jpg";

export default function Logo() {
  return (
    <a href="#">
      <img className="round-image" src={logo} alt="logo" />
    </a>
  );
}
