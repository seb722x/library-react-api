import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Encuentra el libro que quieras</h2><br />
                <p className='header-text fs-18 fw-3'>Este es un espacio para que encuentres historias reales, mágicas, graciosas o hasta cientificas. Sientete libre de buscar y poder seleccionar algo que te llene durante horas, días o meses.  </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header