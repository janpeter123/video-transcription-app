import "../styles/navbar.css";
import logo from "../images/transcription.png"

function Navbar(props :any) {
  return (
    <nav className="Navbar">
        <img src={logo} className="logo"></img>
      <h3>Scribe App</h3>
    </nav>
    
    
  );
}

export default Navbar;
