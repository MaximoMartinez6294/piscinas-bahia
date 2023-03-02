import "./HeroStyles.css";
import 'animate.css';


function Hero (props){
    return (
       <>
      <div className={props.cName}>
         <img alt="HeroImg" src={props.heroImg}/>      
        <div className="hero-text">
          <h1 className="animate__fadeInLeft">{props.title}</h1> 
          <p className="animate__slideInRight">{props.text}</p> 
        </div>
      </div> 
       </>
    )
   }
   export default Hero;