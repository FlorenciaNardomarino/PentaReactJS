import React from "react";
import Banner from "../images/SS2122.jpg";
import Classic from "../images/bannerclassic.jpg";
import Brave from "../images/bannerbrave.jpg";
import Liberty from "../images/bannerliberty.jpg";
import {galeriaClassic} from "../components/layout/Classic";
import {galeriaBrave} from "../components/layout/Brave";
import {galeriaLiberty} from "../components/layout/Liberty"
import '../styles/components/pages/ProductosPage.css';


const ProductosPage = () => {
  return (
    <>
      <main>
        <img className="bannerprincipal" src={Banner} />
        <h2 className="textocolecciones">
          Conocé las colecciones para esta temporada
        </h2>
        <div className="bannercoleccion">
          <img src={Classic} />
        <p>Classic</p>
        </div>
          <div className="galeriaclassic">
            {galeriaClassic.map((e)=>{
                return(
                    <img className="imgClassic" src={e.img} />
                )
            })
            }
          </div>
        <div className="bannercoleccion">
          <img src={Brave} />
          <p>Brave</p>
        </div>
        <div className="galeriabrave">
            {galeriaBrave.map((e)=> {
                return(
                <img className="imgBrave" src={e.img}/>
                )
            })
            }
        </div>

        <div className="bannercoleccion">
          <img src={Liberty} />
          <p>Liberty</p>
        </div>
        <div className="galerialiberty">
            {galeriaLiberty.map((e)=>{
                return(
                    <img className= "imgLiberty" src={e.img}/>
                )
            })}
        </div>
      </main>
    </>
  );
};

export default ProductosPage;
