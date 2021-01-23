import React from 'react'
import Img2 from '../images/2.jpg'
import '../components/paquetes/paquetes.css'

import Itinerario from '../components/naturaleza/Itinerario'
import Precio from '../components/naturaleza/Precio'

export default function Naturaleza() {
    return (
        <div>
            <h1 className="card-title">Paquete Naturaleza</h1>
            <div className="division">
                <div className="picture">
                    <img src={Img2} alt="3" />
                </div>
                <div className="card border-primary mb-3 ">
                    <div className="card-header">Paquete Naturaleza: Palpa - Nazca</div>
                    <div className="card-body">
                        <h4 className="card-title">02 días/01 Noche</h4>
                        <h5 className="card-title">Desde S/. 350</h5>

                        <br />
                        <p className="card-text">INCLUYE:</p>
                        <p className="card-text">Servicio de movilidad</p>
                        <p className="card-text">Box lunch de cortesía (agua mineral + galleta + barra de cereal)</p>
                        <p className="card-text">Picnic (JUGO DE FRUTAS + ENSALADA + SANDWICH + FRUTA)</p>
                        <p className="card-text">01 noche de alojamiento</p>
                        <p className="card-text">01 desayuno en el hotel</p>
                        <p className="card-text">Entradas:</p>
                        <ul>
                            <li className="card-text ml-5">Taller de yoga (INSTRUCTOR + MATT)</li>
                            <li className="card-text ml-5">Juegos y sorteos</li>
                            <li className="card-text ml-5">Botiquín básico de primeros auxilios</li>
                            <li className="card-text ml-5">Botiquín anticovid</li>
                        </ul>

                        <button className="btn btn-primary">Reservar</button>
                    </div>
                </div>
            </div>

            <Itinerario/>
            <Precio/>

        </div>
    )
}
