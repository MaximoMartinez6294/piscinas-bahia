import "./FooterStyle.css"
import logo from "../components/logoblanco1.png"


const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <img src={logo} className="Logo" />
                </div>
                <div>
                    <h1>Seguinos en :</h1>
                    <a href="https://www.instagram.com/piscinasbahiablanca/" target="_blank">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100049663400616" target="_blank">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://www.tiktok.com/@diegopalma393" target="_blank">
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
                    <a href="">
                    <i class="fa-solid fa-location-dot" />
                       <> </>
                       Bahia Blanca, Argentina
                    </a>
                    <a href="">
                     <i class="fa-solid fa-phone" />
                       <> </>
                       2915042795
                    </a>
                    <a href="">
                    <i class="fa-solid fa-envelope" />
                       <> </>
                       piscinasbahia@hotmail.com
                    </a>

                </div>
            </div>
        </div>
    )
}
export default Footer;