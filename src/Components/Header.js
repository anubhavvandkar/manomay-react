import signia_logo from "../Images/logo_signia.png";
import manomay_logo from "../Images/logo_manomay.png";
import {APP_TITLE, APP_SLOGAN} from "../AppConstants.js";
import "../Styles/Header.css";

function Header() {
    return (
      <header className="App-header">
        <img
          className="header_image"
          src={manomay_logo}
          alt="Manomay Logo"
          style={{float: "left"}}
        ></img>
        <div 
          className="header_title">
          <h1>{APP_TITLE}</h1>
          <p>{APP_SLOGAN}</p>
        </div>
        <img
          className="header_image"
          src={signia_logo}
          alt="Signia Logo"
          style={{float: "right"}}
        ></img>
      </header>
    );
}

export default Header;