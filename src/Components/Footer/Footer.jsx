import React from "react";

//styles import
import "./Footer.css";

//assets import
import Logo1 from "../../Assets/Logo/logo1.png";
import Logo2 from "../../Assets/Logo/logo2.png";
import Logo3 from "../../Assets/Logo/logo3.png";
import Facebook from "../../Assets/Logo/logof.png";
import Instagram from "../../Assets/Logo/logoi.png";
import Twitter from "../../Assets/Logo/logot.png";
import Youtube from "../../Assets/Logo/logoy.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer flex flex-column a-j-center">
      <div className="elements flex">
        <ul className="flex  a-j-space-between">
          <li>
            <Link to="">Mobile App</Link>
          </li>
          <li>
            <Link to="">Politique de Confidentialite</Link>
          </li>
          <div className="logo flex">
          <li>
            <img src={Logo1} alt="" />
          </li>
          <li>
            <img src={Logo2} alt="" />
          </li>
          <li>
            <img src={Logo3} alt="" />
          </li>
          </div>
          
          <li>
          <Link to=""> Contact</Link>
           
          </li>
          <li>
            <Link to=''>Bog</Link>
          </li>
         
        </ul>
        <select name="" id="language">
            <option value="">Lanuage</option>
            <option value="">French</option>
            <option value="">English</option>
          </select>
      </div>
      <div className="social flex a-j-center">
      <a href="">
      <img src={Facebook} alt="" />
      </a>

      <a href="">
      <img src={Instagram} alt="" />
      </a>

      <a href="">
      <img src={Twitter} alt="" />
      </a>
       
       <a href="">
       <img src={Youtube} alt="" />
       </a>
       
        
      </div>

      <p>&copy;SynaxMarvel.inc, 2022. We love our users</p>
    </div>
  );
};

export default Footer;
