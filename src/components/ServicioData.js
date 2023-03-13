import "./ServicioDataStyle.css"
import imgb from "./imgb.jpg"

function ServicioData (){
    return(
        <div className="all">
            <div className="quienes-conteiner">
                <h1>Algunos de nuestros trabajos</h1>
                <p> En piscinas Bahia Blanca brindamos los siguientes servicios para garantizar la excelencia de nuestro trabajo y su máximo confort al finalizar la piscina.</p>
                <ul>
                    <li>
                    -Piscinas de hormigon.
                    </li>
                    <li>
                    -Puesta a punto de la instalación.
                    </li>
                    <li>
                    -Asesoramiento profesional.
                    </li>
                    <li>
                    -Luces led.
                    </li>
                    <li>
                    -Cascadas.
                    </li>
                    <li>
                    -Asesoramiento profesional.
                    </li>
                    <li>
                    -Climatización.
                    </li>
                </ul>
                <p>Estamos a tu disposición!</p>
            </div>
            <img className="imagen-quienes" src={imgb} alt="img" />
        </div>
    )
}

export default ServicioData;