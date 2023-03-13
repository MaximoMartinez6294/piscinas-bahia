import "./QuienesSomosStyle.css"
import imgq from "./quienes.jpg"

function Quienes (){
    return(
        <div className="all">
            <div className="quienes-conteiner">
                <h1>La satisfacción del cliente es nuestro objetivo principal</h1>
                <p className="parrafo">Piscinas Bahia Blanca es una empresa dedicada exclusivamente a la construcción y remodelación de piscinas.</p>
                <p className="parrafo">Realizamos todo lo necesario para que Usted sólo se tenga que preocuparse por disfrutar su piscina, garantizando en todo momento el perfecto funcionamiento de la misma.</p>
            </div>
            <img className="imagen-quienes" src={imgq} alt="img" />
        </div>
    )
}

export default Quienes;