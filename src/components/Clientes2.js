import "./ClientesStyles.css"
import ClientesData from "./ClientesData";
import Cliente1 from "../components/5.jpg"
import Cliente2 from "../components/6.jpg"
import Cliente3 from "../components/7.jpg"

function Clientes2(){
    return(
        <div className="clientes">
            <h1>Nuestros Clientes</h1>
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

export default Clientes2;