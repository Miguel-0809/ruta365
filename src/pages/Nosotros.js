import React from 'react'

import '../components/nosotros/nosotros.css'

import Slider from '../components/nosotros/slider'

export default function Nosotros() {


    return (
        <div >
            <div className="imagen">
                <Slider />
            </div>

            <h2 className="text-center">Nosotros</h2>
            <div className="Nosotros">
                <div className="Presentacion">
                    <p className="text-justify p-3">
                        Somos un TT.OO. que opera de manera virtual a través una página web y diversas redes sociales.
                        Buscamos promover la actividad turística en la región de Ica, a través de paquetes innovadores que cuentan con atractivos pocos convencionales a precios accesibles que brinden al cliente una experiencia única e inolvidable.
                        Contamos con paquetes de  Naturaleza, Aventura y Cultural, donde descubrirás nuevos atractivos y vivencias que desearás volver a repetir ¡Ven y únete a la aventura con nosotros!
                    </p>
                </div>
            </div>
        </div>
    )
}

