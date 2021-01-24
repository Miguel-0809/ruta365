import React from 'react'
import { Link } from 'react-router-dom'


/*Style*/
import '../components/paquetes/paquetes.css'

/*Components*/
import Itinerario from '../components/naturaleza/Itinerario'
import Precio from '../components/naturaleza/Precio'
import Slider from '../components/paquetes/slider'

/*Imagenes*/
import Img1 from '../images/Sliders/Imagenes/Naturaleza/1.jpg'
import Img2 from '../images/Sliders/Imagenes/Naturaleza/2.jpg'
import Img3 from '../images/Sliders/Imagenes/Naturaleza/3.jpg'
import Img4 from '../images/Sliders/Imagenes/Naturaleza/4.jpg'

export default function Naturaleza() {
    return (
        <div className="principal">
            <h1 className="card-title pc-title">Paquete Naturaleza</h1>
            <div className="division">
                <div className="picture">
                    <Slider
                        Img1={Img1}
                        Img2={Img2}
                        Img3={Img3}
                        Img4={Img4}
                    />
                </div>
                <div className="card border-primary description ">
                    <h1 className="card-title responsive-title"><b>Paquete Naturaleza</b></h1>
                    <div className="card-header text-center"><b>Palpa - Nazca</b></div>
                    <div className="card-body">
                        <h4 className="card-title">02 días/01 Noche</h4>
                        <h5 className="card-title">Desde S/. 350</h5>

                        <br />
                        <p className="card-text">INCLUYE:</p>
                        <p className="card-text">- Servicio de movilidad</p>
                        <p className="card-text">- Box lunch de cortesía (agua mineral + galleta + barra de cereal)</p>
                        <p className="card-text">- Picnic (JUGO DE FRUTAS + ENSALADA + SANDWICH + FRUTA)</p>
                        <p className="card-text">- 01 noche de alojamiento</p>
                        <p className="card-text">- 01 desayuno en el hotel</p>
                        <p className="card-text">- Entradas</p>
                        <p className="card-text">- Taller de yoga (INSTRUCTOR + MATT)</p>
                        <p className="card-text">- Juegos y sorteos</p>
                        <p className="card-text">- Botiquín básico de primeros auxilios</p>
                        <p className="card-text">- Botiquín anticovid</p>
                       

                        <br /><button className="btn btn-primary"><Link to='/ruta365/contactanos'><a className="d-block text-decoration-none">Reservar</a></Link></button>

                    </div>
                </div>
            </div>

            <Itinerario />
            <Precio />

        </div>
    )
}
