import React from 'react'

/*Style*/
import '../components/paquetes/paquetes.css'

/*Components*/
import Itinerario from "../components/aventura/Intinerario"
import Precio from "../components/aventura/Precio"
import Slider from '../components/paquetes/slider'

export default function Aventura() {

    return (
        <div className="principal">
            <h1 className="card-title pc-title">Paquete Aventura</h1>
            <div className="division">
                <div className="picture d-flex align-items-center">
                    <Slider />
                </div>

                <div className="card border-primary description">
                    <h1 className="card-title responsive-title">Paquete Aventura </h1>
                    <div className="card-header">Paquete Aventura: Ocucaje - Nazca</div>
                    <div className="card-body">
                        <h4 className="card-title">02 días/01 Noche</h4>
                        <h5 className="card-title">Desde S/. 465</h5>

                        <br />
                        <p className="card-text">- Servicio de movilidad</p>
                        <p className="card-text">- Box lunch de cortesía (agua mineral + galleta + barra de cereal)</p>
                        <p className="card-text">- 01 noche de alojamiento</p>
                        <p className="card-text">- 01 desayuno en el hotel</p>
                        <p className="card-text">ENTRADAS</p>
                        <ul>
                            <li className="card-text ml-5">Equipamiento para los deportes de aventura</li>
                            <li className="card-text ml-5">Juegos y sorteos</li>
                            <li className="card-text ml-5">Botiquín básico de primeros auxilios</li>
                            <li className="card-text ml-5">Botiquín anticovid</li>
                        </ul>

                        <br/><button className="btn btn-primary">Reservar</button>
                    </div>
                </div>
            </div>

            <Itinerario />
            <Precio />

        </div>
    )
}
