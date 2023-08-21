import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaGithub } from 'react-icons/fa';
import "../styles/work.css";
import AOS from 'aos';
import 'aos/dist/aos.css';



function Works() {

    useEffect(() => {
        AOS.init(); // Inicializa AOS
    }, []);


    return (
        <div className="container px-4 py-5" id="custom-cards">
            <h2 className="display-5 fw-bold work" id="repos">Work</h2>
            <hr className="featurette-divider"></hr>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

                <div data-aos="fade-right" className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg fs-2 mb-3">
                        <img src="https://user-images.githubusercontent.com/117035764/233983405-466ea2eb-1f39-4855-a16f-7abfa69a986a.png" className="d-block w-100" alt="..." />
                    </div>
                    <h3>Seo BirdLife</h3>
                    <p>Educational application for geolocation and learning about birds, deployed on a server using Symfony and React.</p>
                    <a href="https://github.com/Marian4gc/SeoBirdLife" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
                </div>

                <div data-aos="fade-right" className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <img src="https://i.postimg.cc/ZRqcLh1v/Captura-de-pantalla-2023-03-18-004207.png" className="d-block w-100" alt="..." />
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Tanjiro</h3>
                    <p>Webpage layout for series and movies using Bootstrap.</p>
                    <a href="https://github.com/Marian4gc/proyectoweb" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
                </div>

                <div data-aos="fade-right" className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <img src="https://i.postimg.cc/X7WQmKWg/Captura-de-pantalla-2023-03-17-135723.png" className="d-block w-100" alt="..." />
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Form Validation with JS</h3>
                    <p>Validation of form information using JavaScript.</p>
                    <a href="https://github.com/Marian4gc/formulario-js" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
                </div>

            </div>

            <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">

                <div data-aos="fade-right" className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg fs-2 mb-3">
                        <img src="https://i.postimg.cc/RhKn7sVn/Captura-de-pantalla-2023-03-18-002814.png" className="d-block w-100" alt="..." />
                    </div>
                    <h3 className="fs-2 text-body-emphasis">React Form</h3>
                    <p>Validated form using the Formik library.</p>
                    <a href="https://github.com/Marian4gc/formulario-react" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
                </div>

                <div data-aos="fade-right" className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg fs-2 mb-3">
                        <img src="https://user-images.githubusercontent.com/115170876/221117608-73375859-b8f3-4489-ab3d-04ef7e3dae47.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <h3 className="fs-2 text-body-emphasis">AnimApp</h3>
                    <p>AnimApp is an e-commerce web application designed to help people adopt animals.</p>
                    <a href="https://github.com/Marian4gc/hackathon-animApp" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
                </div>

                <div data-aos="fade-right" className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg fs-2 mb-3">
                        <img src="https://i.postimg.cc/4NqTz6LG/aplicacion-Navidad.png" className="d-block w-100" alt="..." />
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Christmas Web App</h3>
                    <p>Website dedicated to receiving and creating letters for all the boys and girls of the world from Santa Claus and the Three Wise Men.</p>
                    <a href="https://github.com/Marian4gc/proyectonavidad" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
                </div>

                <div data-aos="fade-right" className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg fs-2 mb-3">
                        <img src="https://i.postimg.cc/6qhZZvyr/Captura-de-pantalla-2023-03-17-141107.png" className="d-block w-100 carousel-image" alt="..." />
                    </div>
                    <h3 className="fs-2 text-body-emphasis">React Application</h3>
                    <p>E-commerce application with React in a Node environment dedicated to plant sales.</p>
                    <a href="https://github.com/Marian4gc/vivero-react" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
                </div>

            </div>

        </div>
    );
    // en español
    // return (
    //     <div className="container px-4 py-5" id="custom-cards">
    //         <h2 className="display-5 fw-bold work" id="repos">Work</h2>
    //         <hr className="featurette-divider"></hr>
    //         <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

    //             <div className="feature col">
    //                 <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg fs-2 mb-3">
    //                     <img src="https://user-images.githubusercontent.com/117035764/233983405-466ea2eb-1f39-4855-a16f-7abfa69a986a.png" className="d-block w-100" alt="..." />
    //                 </div>
    //                 <h3>Seo BirdLife</h3>
    //                 <p>Aplicación educativa para la geolocalización y aprendizaje de las aves, subida a un servidor, utilizando Symfony y React</p>
    //                 <a href="https://github.com/Marian4gc/SeoBirdLife" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
    //             </div>

    //             <div className="feature col">
    //                 <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
    //                     <img src="https://i.postimg.cc/ZRqcLh1v/Captura-de-pantalla-2023-03-18-004207.png" className="d-block w-100" alt="..." />
    //                 </div>
    //                 <h3 className="fs-2 text-body-emphasis">Tanjiro</h3>
    //                 <p>Maquetación de página web de series y películas con Bootstrap</p>
    //                 <a href="https://github.com/Marian4gc/proyectoweb" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
    //             </div>

    //             <div className="feature col">
    //                 <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
    //                     <img src="https://i.postimg.cc/X7WQmKWg/Captura-de-pantalla-2023-03-17-135723.png" className="d-block w-100" alt="..." />
    //                 </div>
    //                 <h3 className="fs-2 text-body-emphasis">Validación de Formulario JS </h3>
    //                 <p>Validar la información de un formulario con JavaScript</p>
    //                 <a href="https://github.com/Marian4gc/formulario-js" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
    //             </div>
    //         </div>

    //         <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">

    //             <div className="feature col">
    //                 <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg fs-2 mb-3">
    //                     <img src="https://i.postimg.cc/RhKn7sVn/Captura-de-pantalla-2023-03-18-002814.png" className="d-block w-100" alt="..." />
    //                 </div>
    //                 <h3 className="fs-2 text-body-emphasis">Formulario React</h3>
    //                 <p>Formulario validado usando la librería Formik</p>
    //                 <a href="https://github.com/Marian4gc/formulario-react" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
    //             </div>

    //             <div className="feature col">
    //                 <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg fs-2 mb-3">
    //                     <img src="https://user-images.githubusercontent.com/115170876/221117608-73375859-b8f3-4489-ab3d-04ef7e3dae47.jpg" className="d-block w-100" alt="..." />
    //                 </div>
    //                 <h3 className="fs-2 text-body-emphasis">AnimApp</h3>
    //                 <p>AnimApp es una aplicación web de comercio electrónico diseñada para ayudar a las personas a adoptar animales.</p>
    //                 <a href="https://github.com/Marian4gc/hackathon-animApp" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
    //             </div>

    //             <div className="feature col">
    //                 <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg fs-2 mb-3">
    //                     <img src="https://i.postimg.cc/4NqTz6LG/aplicacion-Navidad.png" className="d-block w-100" alt="..." />
    //                 </div>
    //                 <h3 className="fs-2 text-body-emphasis">Aplicación web de Navidad</h3>
    //                 <p>Web dedicada a la recepción y a la realización de cartas para todos las niñas y niños del mundo, de parte de Papá Noel y los Reyes Magos.</p>
    //                 <a href="https://github.com/Marian4gc/proyectonavidad" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
    //             </div>

    //             <div className="feature col">
    //                 <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg fs-2 mb-3">
    //                     <img src="https://i.postimg.cc/6qhZZvyr/Captura-de-pantalla-2023-03-17-141107.png" className="d-block w-100 carousel-image" alt="..." />
    //                 </div>
    //                 <h3 className="fs-2 text-body-emphasis">Aplicación React</h3>
    //                 <p>Aplicación e-commerce con React en entorno node dedicada a la venta de plantas.</p>
    //                 <a href="https://github.com/Marian4gc/vivero-react" target="_blank" rel="noopener noreferrer" style={{ margin: '10px', color: 'white' }} ><FaGithub size='2em' /></a>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Works
