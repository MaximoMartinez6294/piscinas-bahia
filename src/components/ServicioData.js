import "./ServicioDataStyle.css"
import imgb from "./imgb.jpg"

function ServicioData (){
    return(
        <div className="all">
            <div className="quienes-conteiner">
                <h1>Servicio Técnico Piscinas</h1>
                <p>Piscinas Bahia Blanca dispone de un servicio propio de asistencia técnica que garantiza el correcto asesoramiento necesario para conseguir el adecuado funcionamiento de la instalación de piscina.</p>
                <ul>
                    <li>
                    -Tratamientos químicos del agua.
                    </li>
                    <li>
                    -Tratamientos físicos del agua.
                    </li>
                    <li>
                    -Reingeniería.
                    </li>
                    <li>
                    -Adecuación de las instalaciones a la normativa vigente.
                    </li>
                    <li>
                    -Presupuestos para la mejora de las instalaciones.
                    </li>
                </ul>
                <p>Contamos con personal propio preparado para resolver cualquier problema con absoluta rapidez.</p>
                <p>Los materiales y equipos utilizados en nuestros montajes son de primeras marcas con amplia experiencia y garantía.</p>
            </div>
            <img className="imagen-quienes" src={imgb} alt="img" />
        </div>
    )
}

export default ServicioData;