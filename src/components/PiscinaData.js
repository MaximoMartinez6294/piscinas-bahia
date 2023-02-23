import { Component } from "react";
import Piscina1 from "../components/1.jpg"
import Piscina2 from "../components/2.jpg"
import "./PiscinaStyle.css"

class PiscinaData extends Component{
    render(){
    return(
    <div className={this.props.className}>
        <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}
            </p>
        </div>
        <div className="image">
            <img alt="img" src={this.props.img1} />
            <img alt="img" src={this.props.img2} />
        </div>
    </div>
    );
  }
}

export default PiscinaData;