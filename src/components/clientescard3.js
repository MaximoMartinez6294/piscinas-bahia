import "./clientescard3Style.css"
import ClientesData from "./ClientesData";
import Cliente1 from "../components/5.jpg"
import Cliente2 from "../components/6.jpg"
import Cliente3 from "../components/7.jpg"

function clientescard3(){
    return(
        <div className="clientes3">
            <h1>Algunos de nuestros clientes</h1>
            <div className="clientescard">
                <ClientesData
                image={Cliente1}
                />
                <ClientesData
                image={Cliente2}
                />
                <ClientesData
                image={Cliente3}
                />
                
            </div>
        </div>
    );
}

export default clientescard3;