import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Clientes2 from "../components/Clientes2";

function Servicio (){
   return (
      <>
      <Navbar/>    
      <Hero 
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1597126730312-2109e5db11fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Servicio"
        /> 
        <Clientes2 />
        <Footer />
      </>
   )
  }
  export default Servicio;