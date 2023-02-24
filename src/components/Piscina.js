import Piscina1 from "../components/1.jpg"
import Piscina2 from "../components/2.jpg"
import Piscina3 from "../components/3.jpg"
import Piscina4 from "../components/4.jpg"
import PiscinaData from "./PiscinaData";
import "./PiscinaStyle.css";


const Piscina = () => {
    return(
        <div className="piscina">
            <h1>Piscinas Bahia Blanca</h1>
            <p>Somos una empresa familiar, con 8 años de experiencia en el mercado y en creciente desarrollo. Con un diseño, calidad y confianza puestos a tu servicio, para lograr tu piscina soñada en tan solo 30 dias!.</p>

            <PiscinaData
            className="first-des"
            heading="Mas de 8 años haciendo piscinas!"
            text="Somos una empresa de fabricación de piscinas, contamos con profesionales capaces de hacer tu piscina soñada para que puedas disfrutar con toda tu familia.Nuestros excelentes planes de financiación propios son pensados a la medida de cada necesidad."
            img1={Piscina1}
            img2={Piscina2}
            />
            <PiscinaData
            className="first-des-reverse"
            heading="Construccion!"
            text="Una construcción bien hecha, significa evitar trabajos innecesarios en el futuro. En la construcción de piscinas nos caracteriza la rapidez y limpieza en la ejecución de las mismas, así como unos precios accesibles y competitivos.
            Las piscinas de hormigón armado suelen ser las más deseadas por su acabado impecable. Aunque requieren de una construcción importante, con ello se asegura su resistencia y durabilidad a través de muchos años."
            img1={Piscina3}
            img2={Piscina4}
            />
        
        </div>

    )
}

export default Piscina;