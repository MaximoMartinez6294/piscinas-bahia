import "./ClientesStyles.css"
import ClientesData from "./ClientesData";
import Cliente1 from "../components/5.jpg"
import Cliente2 from "../components/6.jpg"
import Cliente3 from "../components/7.jpg"
import Cliente4 from "../components/8.jpg"
import Cliente5 from "../components/9.jpg"
import Cliente6 from "../components/10.jpg"
import Cliente7 from "../components/11.jpg"
import Cliente8 from "../components/12.jpg"
import Cliente9 from "../components/13.jpg"
import Cliente10 from "../components/14.jpg"
import Cliente11 from "../components/15.jpg"
import Cliente12 from "../components/16.jpg"
import Cliente13 from "../components/17.jpg"
import Cliente14 from "../components/18.jpg"
import Cliente15 from "../components/19.jpg"
import Cliente16 from "../components/20.jpg"
import Cliente17 from "../components/21.jpg"
import Cliente18 from "../components/22.jpg"
import Cliente19 from "../components/23.jpg"
import Cliente20 from "../components/24.jpg"
import Cliente21 from "../components/25.jpg"
import Cliente22 from "../components/26.jpg"
import Cliente23 from "../components/27.jpg"
import Cliente24 from "../components/28.jpg"
import Cliente25 from "../components/29.jpg"
import Cliente26 from "../components/30.jpg"
import Cliente27 from "../components/31.jpg"
import Cliente28 from "../components/32.jpg"
import Cliente29 from "../components/33.jpg"
import Cliente30 from "../components/34.jpg"


import Reforma1 from "../components/1R.jpg"
import Reforma2 from "../components/2R.jpg"
import Reforma3 from "../components/3R.jpg"
import Reforma4 from "../components/4R.jpg"
import Reforma5 from "../components/5R.jpg"
import Reforma6 from "../components/6R.jpg"

function Clientes2(){
    return(
        <div className="clientes">
            <h1 href="/galeria">Nuestros Clientes</h1>
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
                image={Cliente4}
                />
                <ClientesData
                image={Cliente5}
                />
                <ClientesData
                image={Cliente6}
                />
                
            </div>
            <div className="clientescard">
                <ClientesData
                image={Cliente7}
                />
                <ClientesData
                image={Cliente8}
                />
                <ClientesData
                image={Cliente9}
                />
            </div>
            <div className="clientescard">
                <ClientesData
                image={Cliente10}
                />
                <ClientesData
                image={Cliente11}
                />
                <ClientesData
                image={Cliente12}
                />
            </div>
            <div className="clientescard">
                <ClientesData
                image={Cliente13}
                />
                <ClientesData
                image={Cliente14}
                />
                <ClientesData
                image={Cliente15}
                />
            </div>
            <div className="clientescard">
                <ClientesData
                image={Cliente16}
                />
                <ClientesData
                image={Cliente17}
                />
                <ClientesData
                image={Cliente18}
                />
            </div>
            <div className="clientescard">
                <ClientesData
                image={Cliente19}
                />
                <ClientesData
                image={Cliente20}
                />
                <ClientesData
                image={Cliente21}
                />
            </div>
            <div className="clientescard">
                <ClientesData
                image={Cliente22}
                />
                <ClientesData
                image={Cliente23}
                />
                <ClientesData
                image={Cliente24}
                />
            </div>
            <div className="clientescard">
                <ClientesData
                image={Cliente25}
                />
                <ClientesData
                image={Cliente26}
                />
                <ClientesData
                image={Cliente27}
                />
            </div>
            <div className="clientescard">
                <ClientesData
                image={Cliente28}
                />
                <ClientesData
                image={Cliente29}
                />
                <ClientesData
                image={Cliente30}
                />
            </div>

          <h1 href="#reformas">Reformas</h1>
           <div className="clientescard">
                <ClientesData
                image={Reforma1}
                />
                <ClientesData
                image={Reforma2}
                />
                <ClientesData
                image={Reforma3}
                />
           </div>
           <div className="clientescard">
                <ClientesData
                image={Reforma4}
                />
                <ClientesData
                image={Reforma5}
                />
                <ClientesData
                image={Reforma6}
                />
           </div>
        </div> 
        
    );
}

export default Clientes2;