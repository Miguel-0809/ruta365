import React from 'react'
import Container from "../templates/container"
import { Route } from 'react-router-dom';

//Pages
import Aventura from "./Aventura"
import Cultural from "./Cultural"
import Naturaleza from "./Naturaleza"
import Nosotros from "./Nosotros"
import Contactanos from "./Contactanos"

import Portada from "../images/portada.jpg"

//Extra style
import "../components/home/home.css"

export default function Inicio() {
    return (
        <Container>
            <Route exact path="/ruta365/" render={() => {
                return (
                    <div className="w3-display-container inicio" >
                        <p>Inicio</p>
                    </div>

                );
            }}>
            </Route>

            <Route path="/ruta365/aventura" component={Aventura} />
            <Route path="/ruta365/cultural" component={Cultural} />
            <Route path="/ruta365/naturaleza" component={Naturaleza} />
            <Route path="/ruta365/nosotros" component={Nosotros} />
            <Route path="/ruta365/contactanos" component={Contactanos} />

        </Container>
    )
}
