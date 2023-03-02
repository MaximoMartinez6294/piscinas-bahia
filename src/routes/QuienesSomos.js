import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Quienes from "../components/QuienesSomos";
import Var from "../components/Var";
import Clientes from "../components/Clientes";

function QuienesSomos (){
   return (
      <>
      <Navbar/>    
      <Hero 
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1562844275-857f6e7c429e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1303&q=80"
        title="Quiénes somos"
        />
        <Quienes />
        <Var />
        <Clientes />
        <Footer />
      </>
   )
  }
  export default QuienesSomos;