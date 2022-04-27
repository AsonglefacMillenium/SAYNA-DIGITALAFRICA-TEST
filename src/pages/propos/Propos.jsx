import React from "react";
import { Link } from "react-router-dom";

//components import
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";

//styles imort
import "./Propos.css";

//assets import
import Image5 from "../../Assets/Illustration/img5.png";
import Image34 from "../../Assets/Illustration/img34.png";

const Propos = () => {
  return (
    <div className="propos">
      <Header />

      <div className="propos__landing flex a-j-space-between">
        <div className="landing__left">
          <h1>LA TOILE</h1>
          <p>Drilling drilling petite antenne!</p>
        </div>

        <div className="landing__image">
          <img src={Image5} alt="" className="rotate__image" />
        </div>
      </div>

      <div className="propos__red flex a-j-space-between">
        <div className="propos__red__left">
          <div className="top">
            <h1>LA PETITE ANTENNE</h1>
            <h3>DEnvie de laisser un mot à ton araignée préférée. Dépose ton message et on s’occupe de
tout !</h3>
          </div>
          <div className="left__image">
            <img src={Image34} alt="" />
          </div>
        </div>
        <div className="propos__red__right">
          <form action=" flex flex-column">
            <input type="text" placeholder="" />
            <input type="text" placeholder="" />
            <input type="text" placeholder="" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit">Envoyez</button>
          </form>
        </div>
      </div>

      <div className="propos__blue">
        <h1>SAYNAX MARVEL</h1>
        <div className="flex propos__content a-j-center">
        <div className="Propos__blue__left flex flex-column a-j-space-between">
          <div className="propos">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum natus labore, reiciendis mollitia autem recusandae quia
              illum beatae explicabo deleniti voluptatibus officiis in modi
              perferendis, eveniet vel quaerat, minus expedita!
            </p>
          </div>
          <div className="propos">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum natus labore, reiciendis mollitia autem recusandae quia
              illum beatae explicabo deleniti voluptatibus officiis in modi
              perferendis, eveniet vel quaerat, minus expedita!
            </p>
          </div>
        </div>

        <div className="Propos__blue__right">
          <div className="propos">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum natus labore, reiciendis mollitia autem recusandae quia
              illum beatae explicabo deleniti voluptatibus officiis in modi
              perferendis, eveniet vel quaerat, minus expedita!
            </p>
          </div>
          <div className="propos">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum natus labore, reiciendis mollitia autem recusandae quia
              illum beatae explicabo deleniti voluptatibus officiis in modi
              perferendis, eveniet vel quaerat, minus expedita!
            </p>
          </div>
        </div>
        </div>
      
      <div className="propos__bottom flex flex-column a-j-space-between">
        <p>perferendis, eveniet vel quaerat, minus expedita!</p>
        <div className="bottom__buttons flex a-j-space-between">
        <Link to="/">
              <Button
                type="secondary"
                text="Facebook"
                padding="0.7rem 2rem"
                borderThickness="2"
                fontSize="20px"
                borderRadius="20px"
                fontWeight="600"
              />
            </Link>
            <Link to="/">
              <Button
                type="secondary"
                text="Instagram"
                padding="0.7rem 2rem"
                borderThickness="2"
                fontSize="20px"
                borderRadius="20px"
                fontWeight="600"
              />
            </Link>
            <Link to="/">
              <Button
                type="secondary"
                text="YouTube"
                padding="0.7rem 2rem"
                borderThickness="2"
                fontSize="20px"
                borderRadius="20px"
                fontWeight="600"
              />
            </Link>
            <Link to="/">
              <Button
                type="secondary"
                text="marvel.com"
                padding="0.7rem 2rem"
                borderThickness="2"
                fontSize="20px"
                borderRadius="20px"
                fontWeight="600"
              />
            </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Propos;
