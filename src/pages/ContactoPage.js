import React from "react";
import Devoto from '../images/devoto.jpeg';
import Nine from '../images/nine.png';
import Palmas from '../images/palmas.jpeg';
import PlazaOeste from '../images/plazaoeste.png';
import Soleil from '../images/soleil.png';
import Unicenter from '../images/unicenter.png';
import Dot from '../images/dot.png';
import Patio from '../images/patio.jpeg';
import Terrazas from '../images/terrazas.jpeg';
import Alcorta from '../images/alcorta.png';
import Walk from '../images/walk.png';
import Tienda from '../images/tienda.jpg';
import Store from '../images/store.jpeg';
import Trabajo from '../images/trabajo.jpeg';
import '../styles/components/pages/ContactoPage.css';
import {Link} from 'react-router-dom';

const ContactoPage = () => {
  return (
    <>
      <main>
        <div className="acercade">
          <img className="frentetienda" src={Tienda} />
          <p>
            Penta nace como una marca dedicada a satisfacer las necesidades de
            las mujeres. Creemos que todas merecen verse bien y sentirse comodas
            mientras lucen sus lentes de lectura o de sol.
          </p>
        </div>
        <div className="mision">
          <p>
            Nuestra misión es acercarte lentes de calidad siguiendo las
            tendencias más modernas.
            <br />
            Te ofrecemos líneas elegantes que a su vez te brindarán frescura y
            todo el estilo que merecés. Tenemos gran variedad de productos para
            que completes tu look y te veas única.
          </p>
          <img className="chicaentienda" src={Store} />
        </div>
        <div className="contacto">
          <p>Envianos tu consulta</p>
          <form className="formulariocontacto">
            <ul>
              <li>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="user_name" />
              </li>
              <li>
                <label for="mail">Mail:</label>
                <input type="email" id="mail" name="user_mail" />
              </li>
              <li>
                <label for="msg">Mensaje:</label>
                <textarea id="msg" name="user_message"></textarea>
              </li>
              <li className="button">
                <button type="submit">Enviar </button>
              </li>
            </ul>
          </form>
        </div>

        <div>
          <p className="textoshopping">
            Encontranos en los mejores shoppings de Argentina
          </p>
          <ul className="listashopping">
            <img src={Devoto}/>
            <img src={Nine} />
            <img src={Palmas} />
            <img src={PlazaOeste} />
            <img src={Soleil} />
            <img src={Unicenter} />
            <img src={Dot} />
            <img src={Patio} />
            <img src={Terrazas} />
            <img src={Alcorta} />
            <img src={Walk} />
          </ul>
        </div>
        <div className="trabajaconnosotros">
          <img src={Trabajo} />
          <div>
            <p>
              Sumate al equipo Penta. <br />
              Trabajá con nosotros!!
            </p>
          <Link to="/cv"><button className="cargaTuCv">Cargá tu CV</button></Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactoPage;
