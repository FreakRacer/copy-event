import logo from "../../assets/images/logo.png";
import Menu from "../Menu/Menu";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Menu />
    </header>
  );
}

export default Header;
