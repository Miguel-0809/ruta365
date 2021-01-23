import React from 'react'
import '../components/paquetes/paquetes.css'

import Img3 from '../images/3.jpg'
import Itinerario from "../components/aventura/Intinerario"
import Precio from "../components/aventura/Precio"


export default function Aventura() {

    return (
        <div>
            <h1 className="card-title">Paquete Aventura </h1>
            <div className="division">
                <div className="picture">
                    <img src={Img3} alt="3" />
                </div>
                <div className="card border-primary mb-3 ">
                    <div className="card-header">Paquete Aventura: Ocucaje - Nazca</div>
                    <div className="card-body">
                        <h4 className="card-title">02 días/01 Noche</h4>
                        <h5 className="card-title">Desde S/. 465</h5>

                        <br />
                        <p className="card-text">Servicio de movilidad</p>
                        <p className="card-text">Box lunch de cortesía (agua mineral + galleta + barra de cereal)</p>
                        <p className="card-text">01 noche de alojamiento</p>
                        <p className="card-text">01 desayuno en el hotel</p>
                        <p className="card-text">ENTRADAS</p>
                        <p className="card-text">Equipamiento para los deportes de aventura</p>
                        <p className="card-text">Juegos y sorteos</p>
                        <p className="card-text">Botiquín básico de primeros auxilios</p>
                        <p className="card-text">Botiquín anticovid</p>

                        <button className="btn btn-primary">Reservar</button>
                    </div>
                </div>
            </div>

              <Itinerario/>  
              <Precio/>

        </div>
    )
}
