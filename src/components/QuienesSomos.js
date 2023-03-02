import "./QuienesSomosStyle.css"
import imgq from "./quienes.jpg"

function Quienes (){
    return(
        <div className="all">
            <div className="quienes-conteiner">
                <h1 className="animate__fadeIn">La satisfacción del cliente es la meta fundamental y nuestra única razón de ser</h1>
                <p>Piscinas Bahia Blaca es una empresa creada con la clara orientación de ofrecer una completa y profesional solución en el mantenimiento integral de piscinas comunitarias y privadas.</p>
                <p>Realizamos todo lo necesario para que Usted sólo se tenga que preocupar de disfrutar su piscina, garantizando en todo momento una excelente calidad de agua, tratamiento químico, inspección técnica, mantenimiento de la instalación, todo aquello que usted necesite.</p>
                <p>Piscinas Bahia nace como una empresa de servicios dirigida a comunidades de vecinos, polideportivos, organismos públicos y particulares, ofreciendo siempre la máxima garantía y atención personalizada.</p>
            </div>
            <img className="imagen-quienes" src={imgq} alt="img" />
        </div>
    )
}

export default Quienes;