import "./ContactFormStyle.css"

function ContactForm (){
    return(
        <div className="from-container">
            <h1>Comunicate con nosotros!</h1>
            <form>
                <input placeholder="Nombre" />
                <input placeholder="Email" />
                <input placeholder="Asunto" />
                <textarea placeholder="Mensaje" rows="4"></textarea>
                <button> 
                   <a href="mailto:maximo-martinez@hotmail.es"> Enviar Mensaje </a>
                </button>
            </form>
        </div>
    )
}

export default ContactForm;