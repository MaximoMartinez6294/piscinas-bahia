import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm";
import AntesFoter from "../components/AntesFoter";

function Contacto (){
   return (
      <>
      <Navbar/>    
      <Hero 
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1536331568701-0b15cbb1a918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Contacto"
        />
        <ContactForm />
        <AntesFoter/>
        <Footer />
      </>
   )
  }
  export default Contacto;