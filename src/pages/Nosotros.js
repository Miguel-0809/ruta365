import React from 'react'
import Portada from '../images/nosotros.jpg'

import '../components/nosotros/nosotros.css'

import Img2 from '../images/2.jpg'

export default function Nosotros() {

    
    return (
        <div >
            <img src={Portada} alt="portada" style={{ width: '100%', height: '70vh' }} />
            <div className="Nosotros">

                <div className="imagen">
                    <img src={Img2} alt="Acueductos de Cantalloc" name="fotos1"/>
                </div>            

                <div className="Presentacion">
                    <p>
                        Somos un TT.OO. que opera de manera virtual a través una página web y diversas redes sociales. <br />
                        Promover la actividad turística en la región de Ica, a través de paquetes innovadores que cuentan con atractivos pocos convencionales a precios accesibles que brinden al cliente una experiencia única e inolvidable. <br />
                        El tipo de producto con los que contamos son de Naturaleza, Aventura y Cultural.
                    </p>
                </div>
            </div>
        </div>
    )
}

