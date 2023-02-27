import "./ServicioData2Style.css"
import imga from "./imga.jpg"

function ServicioData2 (){
    return(
        <div className="all">
            <h1 className="Titulo1">Servicio Técnico Piscinas</h1>
            <img className="imagen-quienes2" src={imga} alt="img" />
            <div className="quienes-conteiner2">
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
        </div>
    )
}

export default ServicioData2;