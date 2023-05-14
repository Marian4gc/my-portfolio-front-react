import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/repos.css'

function Repositories() {
    return (
        <div className="container px-4 py-5" id="custom-cards">
            <h2 className="display-5 fw-bold work">Work</h2>
            <hr className="featurette-divider"></hr>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" id="repos">
                <div className="col">
                    <a href="https://github.com/Marian4gc/proyectoweb" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg card-hover" style={{ backgroundImage: `url(https://i.postimg.cc/ZRqcLh1v/Captura-de-pantalla-2023-03-18-004207.png)`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'contain' }}>
                            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ position: 'relative', zIndex: 2 }}>
                                <h3 className="mt-5 mb-4 display-6 lh-1 fw-bold name">Tanjiro</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="d-flex align-items-center me-3">
                                        <small className="descp">Maquetación de página web con bootstrap</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="https://github.com/Marian4gc/formulario-js" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg card-hover" style={{ backgroundImage: `url(https://i.postimg.cc/6qhZZvyr/Captura-de-pantalla-2023-03-17-141107.png)`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'contain' }}>
                            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ position: 'relative', zIndex: 2 }}>
                                <h3 className="mt-5 mb-4 display-6 lh-1 fw-bold name">Aplicación con React</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="d-flex align-items-center me-3">
                                        <small className="descp">Aplicación con React en entorno node.</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Repositories
