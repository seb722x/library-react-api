import React from 'react';
import "./Footer.css"




const Footer = () => {
  return (
    

<section className="footer" id="footer">
    <div className="footer-container">
        <div className="box">
            <h3>Nuestras tiendas</h3>
            <a href="#"> <i className="fas fa-map-marker-alt"></i>Medellín</a>
            <a href="#"> <i className="fas fa-map-marker-alt"></i>Bogotá</a>
            <a href="#"> <i className="fas fa-map-marker-alt"></i>Cali</a>
        </div>

        <div className="box">
            <h3>Dirigete a:</h3>
            <a href="#home"> <i className="fas fa-arrow-right"></i> Home</a>
            <a href="#book-list"> <i className="fas fa-arrow-right"></i> lista de libros</a>
            <a href="#"> <i className="fas fa-arrow-right"></i> sesión</a>
        </div>

        <div className="box">
            <h3>Acerca de:</h3>
            <a href="#"> <i className="fas fa-arrow-right"></i> Sobre nosotros</a>
            <a href="#"> <i className="fas fa-arrow-right"></i> Políticas de privacidad</a>
            <a href="#home"> <i className="fas fa-arrow-right"></i> Servicios</a>
        </div>

      

        <div className="box">
            <h3>Contactenos:</h3>
            <a> <i className="fas fa-phone"></i> 300 454 36 92</a>
            <a> <i className="fas fa-phone"></i> 604 488 66 00</a>
            <a> <i className="fas fa-envelope"></i> servicios@bookstore.com</a>
        </div>
    </div>
</section>

  );
};