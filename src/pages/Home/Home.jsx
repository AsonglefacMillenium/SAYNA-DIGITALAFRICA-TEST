import React from "react";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

//styles import
import "./Home.css";

//assets import
import Image2 from "../../Assets/Illustration/img2.png";
import Image3 from "../../Assets/Illustration/img3.png";
import Image4 from "../../Assets/Illustration/img4.png";
import Image5 from "../../Assets/Illustration/img5.png";
import Image6 from '../../Assets/Illustration/img6.png'

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="landing flex a-j-space-between">
        <div className="landding__content flex flex-column a-j-space-between">
          <h1>SPIDERMAN</h1>
          <div className="landing__button">
            <div className="buttons flex-column a-j-space-between">
              <Link to="/">
                <Button
                  type="primary"
                  text="Voir Les Heros"
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
                  text="Voir Les Heros"
                  padding="0.7rem 2rem"
                  borderThickness="2"
                  fontSize="20px"
                  borderRadius="20px"
                  fontWeight="600"
                />
              </Link>
              <h2>L'araignes sympa du quartier!</h2>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="spidercards flex-column full-width a-j-center">
        <div className="spidercard__head">
          <h1>LES SPIDERMANS AU CINEMA</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="spidercards__body flex a-j-center ">
          <div className="card flex-column flex">
            <img src={Image3} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              sit alias repellendus, obcaecati similique pariatur? Consequatur
              repellat provident et numquam sequi quibusdam? Doloremque mollitia
              porro commodi odit dicta architecto non.
            </p>
            <Link to="/">
              <Button
                type="primary"
                text="Voir Les Heros"
                padding="0.7rem 2rem"
                borderThickness="2"
                fontSize="20px"
                borderRadius="20px"
                fontWeight="600"
              />
            </Link>
          </div>
          <div className="card flex-column flex">
            <img src={Image4} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              sit alias repellendus, obcaecati similique pariatur? Consequatur
              repellat provident et numquam sequi quibusdam? Doloremque mollitia
              porro commodi odit dicta architecto non.
            </p>
            <Link to="/">
              <Button
                type="primary"
                text="Voir Les Heros"
                padding="0.7rem 2rem"
                borderThickness="2"
                fontSize="20px"
                borderRadius="20px"
                fontWeight="600"
              />
            </Link>
          </div>
          <div className="card flex-column flex">
            <img src={Image2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              sit alias repellendus, obcaecati similique pariatur? Consequatur
              repellat provident et numquam sequi quibusdam? Doloremque mollitia
              porro commodi odit dicta architecto non.
            </p>
            <Link to="/">
              <Button
                type="primary"
                text="Voir Les Heros"
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

      <div className="form__container flex a-j-space-between">
        <div className="image__right ">
          <img src={Image5} alt="" />
        </div>
        <div className="form__box flex-column a-j-space-between">
          <h1>DEVIENS UN SPIDERMAN!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form action=" flex flex-column">
            <input type="text" placeholder="" />
            <input type="text" placeholder="" />
            <input type="text" placeholder="" />
            <input type="text" placeholder="" />
           <button type="submit">
               Envoyez
           </button>
            
          </form>
        </div>
      </div>

      <div className="black__red flex a-j-space-between">
      <div className="black__red__left flex-column a-j-space-between">
          <h1>DEVIENS UN SPIDERMAN!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form action=" flex flex-column">
            <input type="text" placeholder="" />
            <input type="text" placeholder="" />
            <div className="checkbox flex a-j-space-between">
                <input type="checkbox" name="" id="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
           <button type="submit">
               Envoyez
           </button>
            
          </form>
        </div>
        <div className="image__right ">
          <img src={Image6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
