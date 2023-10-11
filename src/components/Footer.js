import "./FooterStyle.css"
import logo from "../components/logoblanco1.png"


const Footer = () =>{
    return(
        <div className="footer">
   
            <div className="top">
                
                <div>
                    <img src={logo} className="Logo" alt="" />
                </div>
                <div>
                    <h1>Seguinos en :</h1>
                    <a href="https://www.instagram.com/piscinasbahiablanca/" rel='noreferrer'>
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100049663400616" rel='noreferrer'>
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="" rel='noreferrer'>
                        <i class="fa-brands fa-tiktok"></i>
                    </a>
                    
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Pagina</h4>
                    <a href="/">Inicio</a>
                    <a href="/quienes-somos">Quienes somos</a>
                    <a href="/servicio">Servicio</a>
                    <a href="/contacto">Contacto</a>
                </div>
                <div>
                <h4>Informacion</h4>
                    <a href="/">Piscinas Bahia Blanca</a>
                    <a href="/contacto">Contacto</a>
                    <a href="/servicio">Clientes</a>
                    <a href="/">Status</a>
                </div>
                <div>
                    <h4>Contacto</h4>
                    <a href="https://www.google.com/maps/place/Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95edbcabdc1302bd:0x76d1d88d241e7a11?sa=X&ved=2ahUKEwjm0IiJ17b9AhWQq5UCHXjjBE8Q8gF6BAgOEAI" rel='noreferrer'>
                    <i class="fa-solid fa-location-dot" />
                       <> </>
                       Bahia Blanca, Argentina
                    </a>
                    <a href="https://wa.me/5492915042795" target="_blank">
                     <i class="fa-solid fa-phone" />
                       <> </>
                       2915042795
                    </a>
                    <a href="mailto:diegopalmadiegopalma@outlook.com?Subject=Presupuesto%20para%20una%20piscina.">
                    <i class="fa-solid fa-envelope _blank" />
                       <> </>
                       diegopalmadiegopalma@outlook.com
                    </a>

                </div>
            </div>
        </div>
    )
}
export default Footer;