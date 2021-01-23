import React from 'react'

export default function Precio() {
    return (
        <div className="container pb-5 precio">

            <div>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">TARIFARIO</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 PERSONA</td>
                            <td>S/. 480.00</td>
                        </tr>
                        <tr>
                            <td>2 - 4 PERSONAS</td>
                            <td>S/. 440.00</td>
                        </tr>
                        <tr>
                            <td>5 - 8 PERSONAS</td>
                            <td>S/. 400.00</td>
                        </tr>
                        <tr>
                            <td>9 - 10 PERSONAS</td>
                            <td>S/. 350.00</td>
                        </tr>
                    </tbody>
                </table>
                <p><i>*Los precios mostrados son por persona</i></p>
            </div>

            <div>
                <p><b>OFERTAS:</b></p>
                <p>Lleva 10 personas y uno de ellos viaja gratis</p>
                <p>Si eres universitario obtienes 15% de descuento (REQUISITO: mostrar carnet universitario vigente)</p><br />
                <p>NOTA: No aplica descuento sobre descuento</p>

            </div>

        </div>
    )
}
