import React from 'react'
import Container from "../templates/container"
import { Route } from 'react-router-dom';

//Pages
import Aventura from "./Aventura"
import Cultural from "./Cultural"
import Naturaleza from "./Naturaleza"
import Nosotros from "./Nosotros"
import Contactanos from "./Contactanos"


//Extra style
import "../components/home/home.css"

export default function Inicio() {
    return (
        <Container>
            <Route exact path="/ruta365/" render={() => {
                return (
                    <div className="inicio" >
                        <div className="w3-display-bottomleft w3-container w3-amber w3-hover-orange " style={{ bottom: '10%', opacity: '0.7', width: '60%' }}>
                            <h2><b>Explorando<br />nuevos horizontes</b></h2>
                        </div>

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
