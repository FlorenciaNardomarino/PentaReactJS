import React from "react";
import Spray from "../images/spray.jpg";
import Mujer1 from "../images/mujerlentesredondos.jpg";
import Mujer2 from "../images/mujerlentesamarillo.jpg";
import Mujer3 from "../images/mujer3.jpg";
import Corte from "../images/corte.png";
import Sobre from "../images/sobre.png";
import "../styles/components/pages/HomePage.css";

const HomePage = () => {
  return (
    <>
      <main>
        <img className="spray" src={Spray} />
        <p className="textospray">
          El cuidado que tus lentes necesitan, lo encontrás en Penta.
        </p>
        <h2 className="subtitulocolecciones">Colecciones</h2>
        <div className="colecciones">
          <div className="contenedor">
            <img className="mujer1" src={Mujer1} />
            <h3 className="contenedoruno">Classic</h3>
          </div>
          <div className="contenedor">
            <img className="mujer2" src={Mujer2} />
            <h3 className="contenedordos">Brave</h3>
          </div>
          <div className="contenedor">
            <img className="mujer3" src={Mujer3} />
            <h3 className="contenedortres">Liberty</h3>
          </div>
        </div>
        <img className="corte" src={Corte} />
        <div className="contenedorsubs">
          <div className="infonl">
            <img className="sobre" src={Sobre} />
            <h3>No te pierdas las novedades!</h3>
            <p>Suscribite al newsletter</p>
            <form className="formulariosub">
              <input type="email" />
              <button>Suscribirme</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
