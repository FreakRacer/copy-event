import logo__foot from "../../assets/images/logo-foot.png";
import FooterMenu from "../FooterMenu";
import Copyright from "../Copyright";

function Footer() {
  return (
    <footer>
      <img src={logo__foot} alt="logo" />
      <FooterMenu />
      <Copyright />
    </footer>
  );
}
export default Footer;
