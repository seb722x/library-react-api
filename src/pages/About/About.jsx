import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Sobre nosotros</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Bienvenida comunidad</h2>
            <p className='fs-17'>¡Bienvenidos a nuestra comunidad de amantes de la lectura y defensores del conocimiento abierto!. En este espacio, creemos en el acceso libre y sin restricciones al mundo de la literatura. Somos una comunidad diversa de entusiastas de los libros que se han unido para crear una biblioteca de libros de código abierto, accesible para todos. <br/>Nuestra misión es simple pero significativa: compartimos la creencia de que cada persona tiene derecho a explorar y disfrutar de una amplia gama de libros sin importar su origen, ubicación o recursos. Nos esforzamos por hacer que las historias y el conocimiento estén al alcance de todos.</p>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default About