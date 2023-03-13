import "./ServicioData2Style.css"
import imga from "./imga.jpg"

function ServicioData2 (){
    return(
        <div className="all">
            <h1 className="Titulo1">Servicio Técnico Piscinas</h1>
            <img className="imagen-quienes2" src={imga} alt="img" />
            <div className="quienes-conteiner2">
                <h1>Servicio Técnico Piscinas</h1>

                <p>Disponemos de un servicio técnico propio que garantiza el correcto asesoramiento necesario para conseguir el adecuado funcionamiento de tu piscina. Contamos con:</p>
                <ul>
                    <li>
                    -Reformas.
                    </li>
                    <li>
                    -Construccion.
                    </li>
                    <li>
                    -Instalacion de bombas.
                    </li>
                    <li>
                    -Excavación.
                    </li>

                </ul>

                <p>Los materiales y equipos utilizados en nuestras piscinas son de primeras marcas y calidad.</p>
            </div>
        </div>
    )
}

export default ServicioData2;