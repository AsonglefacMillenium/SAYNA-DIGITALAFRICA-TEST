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
import Image6 from "../../Assets/Illustration/img6.png";
import Audio from "../../Assets/audio1.mp3";
import Footer from "../../Components/Footer/Footer";

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
                  text="Voir Le Heros"
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
                  text="Voir Les Adversaire"
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
          <p>
            Spiderman a pu bénéficier de reboot qui ont permis d’adapter ses
            histoires pour chaque génération !
          </p>
        </div>

        <div className="spidercards__body flex a-j-center ">
          <div className="card flex-column flex flex-wrap">
            <img src={Image3} alt="" />
            <p>
              Trois films Spiderman sont sortis en 2002, 2004 et 2007. Ils sont
              produits par Columbia Pictures et Spiderman est incarné par Tobey
              Maguire. Un quatrième était prévu, mais sera finalement annulé
              suite à des désaccords entre Sam Raimi (le réalisateur) et Sony.
              Cette première trilogie a connu un grand succès auprès des fans et
              du grand public. L’épisode 3 reste à ce jour un des films les plus
              chers de l’histoire du cinéma.
            </p>
            <Link to="/">
              <Button
                type="primary"
                text="Voir Les adversaires"
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
              The Amazing Spiderman est sorti en 2012, c’est Andrew Garfield qui
              incarne le héros et Marc Webb à la réalisation. Un deuxième volet,
              The Amazing Spider-Man : Le destin d'un héros, est sorti en 2014
              et a reçu des critiques très mitigées. Un troisième et quatrième
              film étaient prévus pour 2016 et 2018. Finalement, Marvel et Sony
              trouvent un accord pour introduire Spiderman dans l'Univers
              cinématographique Marvel et abandonne ainsi The Amazing
              Spider-Man.
            </p>
            <Link to="/">
              <Button
                type="primary"
                text="Voir Les adversaires"
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
              Spiderman, désormais incarné par Tom Holland, apparaît pour la
              première fois dans l’univers Marvel avec Captain America : Civil
              War, sorti en 2016. Par la suite, une trilogie de films lui est
              consacrée :
              <ul>
                <li>Spiderman : Homecoming (2017)</li>
                <li>Spiderman : Far From Home (2019)</li>

                <li>Spiderman : No Way Home (2021)</li>
              </ul>
              Le héro est également présent dans Avengers Infinity War et
              Avengers End Game, combattant au côté des Avengers.
            </p>
            <Link to="/">
              <Button
                type="primary"
                text="Voir Les adversaires"
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
          <p>
            Rempli le formulaire ci-dessous afin de recevoir ton propre costume.
          </p>
          <form action=" flex flex-column">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prenom" />
            <input type="text" placeholder="Taille (cm)" />
            <input type="text" placeholder="Poids (kg)" />
            <input type="email" placeholder="Adresse (email)" />
            <button type="submit">Envoyez</button>
          </form>
        </div>
      </div>

      <div className="black__red flex a-j-space-between">
        <div className="black__red__left flex-column a-j-space-between">
          <h1>Inscrit toi à la newsletter !</h1>
          <p>
            L’univers de l’araignée justicière te passionne ? Reste au courant
            des dernières actualités grâce à notre newsletter !
          </p>
          <form action=" flex flex-column">
            <input type="text" placeholder="Nom Prenom" />
            <input type="text" placeholder=" Adresse Email" />
            <div className="checkbox flex ">
              <input type="checkbox" name="" id="" />
              <p>
                Je reconnais accepter la politique de confidentialité de Sayna X
                Marvel.
              </p>
            </div>
            <button type="submit" >S'inscrire a la newsletter</button>
          </form>
        </div>
        <div className="image__right ">
          <img src={Image6} alt="" />
        </div>
      </div>

      <audio src={Audio}>audio</audio>

      <Footer />
    </div>
  );
};

export default Home;
