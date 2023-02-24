import Clientes from "../components/Clientes";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Piscina from "../components/Piscina";
import Footer from "../components/Footer"
import BotonWp from "../components/botonwp";

function Inicio (){
 return (
    <>
    <Navbar/>    
    <Hero 
      cName="hero"
      heroImg="https://images.unsplash.com/photo-1470376619031-a6791e534bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      title="Tu piscina lista en 30 dias!"
      text="¿Listo para tu nueva piscina?"
      url="/"
      />
      <BotonWp/>
      <Piscina />
      <Clientes />
      <Footer />
    </>
 )
}
export default Inicio;