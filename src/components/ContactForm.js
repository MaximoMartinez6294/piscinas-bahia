import "./ContactFormStyle.css"
import emailjs from "emailjs-com"
import React, {useState} from "react";
import {Toaster, toast} from "react-hot-toast"

function ContactForm (){ 

    const notify = () => toast.success('Mail enviado');
    const [datos, setDatos] =useState({
        name: "",
        user_email: "",
        message: ""
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("service_zl4ydxg","template_ozkbdke",e.target,"aoEGWnZymwAvyATH7").then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return(
        <div className="from-container">
            <h1>Comunicate con nosotros!</h1>
            <form onSubmit={sendEmail}>
                <input 
                type="text" 
                name="name" 
                placeholder="Nombre"
                onChange={handleInputChange} 
                required
                />
                <input 
                type="text" 
                name="user_email" placeholder="Email o numero de telefono" 
                onChange={handleInputChange}
                required
                />
                <textarea 
                type="text"
                name="message" 
                placeholder="Mensaje" 
                rows="4"
                onChange={handleInputChange}
                required 
                >
                </textarea>
                <button onClick={notify}>Enviar mail</button>
            </form>
            <Toaster/>
        </div>
    )
}

export default ContactForm;