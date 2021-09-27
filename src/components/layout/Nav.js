import React from 'react'
import Insta from '../../images/insta.png'
import Face from '../../images/face.png'
import '../../styles/components/layout/Nav.css'
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <nav>
        <Link className="logoLink" to="/"><h1>Penta</h1></Link>
        <ul className="navegacion">
            <Link to="/"><a>Home</a></Link>
            <Link to="/productos"> <a>Productos</a></Link>  
            <Link to="/contacto"><a>Contacto</a></Link>
        </ul>
        <ul className="sociales">
            <img className="instagram" src={Insta} alt=""/>
            <img className="facebook" src={Face} alt=""/>
        </ul>
    </nav>

        </>
    )
}

export default Nav
