import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/carousel.css'

function Carousel() {
  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="display-5 fw-bold work" id="repos">Work</h2>
        <hr className="featurette-divider"></hr>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="https://user-images.githubusercontent.com/117035764/233983405-466ea2eb-1f39-4855-a16f-7abfa69a986a.png" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <a href="https://github.com/Marian4gc/SeoBirdLife" target="_blank" rel="noopener noreferrer" className='display-5 fw-bold work' style={{ textDecoration: 'none' }}>Seo BirdLife</a>
                <h2>Aplicación subida a un servidor, utilizando Symfony y React</h2>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img src="https://i.postimg.cc/ZRqcLh1v/Captura-de-pantalla-2023-03-18-004207.png" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <a href="https://github.com/Marian4gc/proyectoweb" target="_blank" rel="noopener noreferrer" className='display-5 fw-bold work' style={{ textDecoration: 'none' }}>Tanjiro</a>
                <h2>Maquetación de página web con bootstrap</h2>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://i.postimg.cc/6qhZZvyr/Captura-de-pantalla-2023-03-17-141107.png" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <a href="https://github.com/Marian4gc/vivero-react" target="_blank" rel="noopener noreferrer" className='display-5 fw-bold work' style={{ textDecoration: 'none' }}>Aplicación con React</a>
                <h2>Aplicación con React en entorno node.</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/X7WQmKWg/Captura-de-pantalla-2023-03-17-135723.png" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <a href="https://github.com/Marian4gc/formulario-js" target="_blank" rel="noopener noreferrer" className='display-5 fw-bold work' style={{ textDecoration: 'none' }}>Validación de formulario JS</a>
                <h2>Validar la información de un formulario con JavaScript</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/RhKn7sVn/Captura-de-pantalla-2023-03-18-002814.png" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <a href="https://github.com/Marian4gc/formulario-react" target="_blank" rel="noopener noreferrer" className='display-5 fw-bold work' style={{ textDecoration: 'none' }}>Formulario React</a>
                <h2>Formulario de React validado, utilizando Formik</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://user-images.githubusercontent.com/115170876/221117608-73375859-b8f3-4489-ab3d-04ef7e3dae47.jpg" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <a href="https://github.com/Marian4gc/hackathon-animApp" target="_blank" rel="noopener noreferrer" className='display-5 fw-bold work' style={{ textDecoration: 'none' }}>AnimApp</a>
                <h2>AnimApp es una aplicación web de comercio electrónico diseñada para ayudar a las personas a adoptar animales.</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://i.postimg.cc/4NqTz6LG/aplicacion-Navidad.png" className="d-block w-100 carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <a href="https://github.com/Marian4gc/proyectonavidad" target="_blank" rel="noopener noreferrer" className='display-5 fw-bold work' style={{ textDecoration: 'none' }}>Aplicación Navidad</a>
                <h2>Web dedicada a la recepción y a la realización de cartas para todos las niñas y niños del mundo.</h2>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}


export default Carousel;


