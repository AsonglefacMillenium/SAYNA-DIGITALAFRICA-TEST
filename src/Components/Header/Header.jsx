import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

//assets import
import Logo1 from "../../Assets/Logo/logo1.png";
import Logo2 from "../../Assets/Logo/logo2.png";
import Logo3 from "../../Assets/Logo/logo3.png";


const Header = () => {
  return (
    <div className="header flex a-j-center">
      <div className="logo flex a-j-space-between">
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" className="logo__name"/>
      </div>
      <div className="list ">
          <ul className="flex a-j-space-between">
              <li>
                  <Link to='/home'>Accueil</Link>
              </li>
              <li>
                  <Link to='/adversaires'>Adversaires</Link>
              </li>
              <li>
                  <Link to='/heros'>Heros</Link>
              </li>
              <li>
                  <Link to='/propos'>A Propos</Link>
              </li>
              
          </ul>
      </div>
    </div>
  );
};

export default Header;
