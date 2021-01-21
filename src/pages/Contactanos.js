import React from 'react'
import "../components/contactanos/contactanos.css"

export default function Contactanos(props) {
    return (
        <div>
            <h2 className="text-center pt-5 mb-5">Contáctanos</h2>

            <div className="contact-container">

                <form className="contact-card" >
                    <fieldset className="border p-5">
                        <label htmlFor="Nombre" >Nombre</label>
                        <div id="Nombre" className="mb-3">
                            <input type="text" className="form-control" placeholder="Ingrese su nombre completo" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Ingrese su correo electrónico" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="number">Teléfono</label>
                            <input type="number" className="form-control" id="number" placeholder="Ingrese su teléfono" />
                        </div>

                        <div>
                            <label htmlFor="number">Mensaje</label>
                            <textarea className="form-control" id="exampleTextarea" rows={3} defaultValue={""} placeholder="Ingrese su mensaje" /><br />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary w-30 mr-2">Enviar</button>
                            <button type="submit" className="btn btn-secondary w-30 ml-2">Borrar</button>
                        </div>


                    </fieldset>
                </form>

                <div className="contact-card p-4" >
                    <h3 className="text-center">¡Gracias por contactarnos!</h3>
                    
                    <p><i className="fas fa-map-marked-alt"></i> Lima, Perú</p>
                    <p className="border-bottom mb-3"><i className="fas fa-envelope"></i> ruta365.ica@gmail.com</p>

                    <h6 className="text-center">Tambien puedes encontrarnos en</h6>
                    <div className='row justify-content-center'>
                        <a className="p-2" href="https://www.facebook.com/Ruta365" target="_blank"><i class="fab fa-facebook-square"></i></a>
                        <a className="p-2" href="https://www.instagram.com/ruta365.ica" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
