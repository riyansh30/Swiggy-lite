import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <Link to='/'> <img src={LOGO_URL} alt="App Logo" className="logo" /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About Us</li></Link>
          <Link to='/contact'><li>Contact Us</li></Link>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
