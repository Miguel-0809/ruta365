import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"

export default function Navbar() {
    return (
        <nav>
            <div className="wrapper">
                <div className="logo"><a>Ruta 365</a></div>
                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul className="nav-links">
                    <li><Link to="/ruta365/"><a>Inicio</a></Link></li>
                    <li><Link to="/ruta365/nosotros"><a>Nosotros</a></Link></li>
                    <li>
                        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times" /></label>
                        <a href="#" className="desktop-item">Paquetes turísticos</a>
                        <input type="checkbox" id="showDrop" />
                        <label htmlFor="showDrop" className="mobile-item">Paquetes turisticos</label>
                        <ul className="drop-menu">
                            <li><Link to="/ruta365/aventura"><a>Aventura</a></Link></li>
                            <li><Link to="/ruta365/cultural"><a>Cultural</a></Link></li>
                            <li><Link to="/ruta365/naturaleza"><a>Naturaleza</a></Link></li>
                        </ul>
                    </li>
                    <li><Link to="/ruta365/contactanos"><a>Contáctanos</a></Link></li>
                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars" /></label>
            </div>
        </nav>

    )
}
