import "../styles/navbar.css";
import logo from "../images/transcription.png";
import { Link, NavLink } from "react-router-dom";

function Navbar(props: any) {
  return (
    <nav className="Navbar">
      <Link to={"/"} className="Navbar">
        <img src={logo} className="logo"></img>
        <h3>Scribe App</h3>
      </Link>
    </nav>
  );
}

export default Navbar;
