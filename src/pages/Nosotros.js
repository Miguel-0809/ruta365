import React from 'react'

import '../components/nosotros/nosotros.css'

import Img2 from '../images/2.jpg'
import Slider from '../components/nosotros/slider'

export default function Nosotros() {

    
    return (
        <div >
            <div className="imagen">
                   <Slider/>
            </div>     
                
            <div className="Nosotros">

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

