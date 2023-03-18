import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/repos.css'

function Repos() {
    
const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apiportfolio/list')
        .then(response => response.json())
        .then(repo => setRepo(repo))
        .catch(error => console.error(error));        
    }, []);
    return (
        <div className="container px-4 py-5" id="custom-cards">
            <h2 className="display-5 fw-bold work">Work</h2>
            <hr className="featurette-divider"></hr>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" id="repos">
            {repo.map(int => (
                <div className="col" key={int.id}>
                <a href={int.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg card-hover" style={{backgroundImage: `url(${int.image})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'contain'}}>
                    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ position: 'relative', zIndex: 2 }}>
                        <h3 className="mt-5 mb-4 display-6 lh-1 fw-bold name">{int.name}</h3>
                        <ul className="d-flex list-unstyled mt-auto">
                        <li className="d-flex align-items-center me-3">
                            <small className="descp">{int.description}</small>
                        </li>
                        </ul>
                    </div>
                    </div>
                </a>
                </div>    
                ))}
            </div>
        </div>

        );
}

export default Repos;  