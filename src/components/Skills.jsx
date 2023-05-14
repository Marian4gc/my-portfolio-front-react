import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faSymfony, faFigma, faGitAlt, faGithub, faPhp, faNode, faNpm} from '@fortawesome/free-brands-svg-icons';
import { Col, Row } from 'react-bootstrap';
import "../styles/skills.css";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import cypressIcon from '../assests/navbar-brand.svg';
import postmanIcon from '../assests/postman-icon.svg';


const Skills = () => {
    return (
        <div id='skills' className='container-fluid'>
        <div className='d-flex justify-content-center my-5 fw-bold'>
            <h1 className="display-5 fw-bold skills">Skills</h1>
        </div>
            <hr className="featurette-divider"></hr>
        <div className="skills-icons">
            <Row className='text-center'>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faHtml5} size='3x' />
                <h3 className='mt-4 mb-3'>HTML5</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faCss3Alt} size='3x' />
                <h3 className='mt-4 mb-3'>CSS3</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faJsSquare} size='3x' />
                <h3 className='mt-4 mb-3'>JavaScript</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faReact} size='3x' />
                <h3 className='mt-4 mb-3'>React</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faBootstrap} size='3x' />
                <h3 className='mt-4 mb-3'>Bootstrap</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                    <FontAwesomeIcon icon={faSymfony} size='3x' />
                    <h3 className='mt-4 mb-3'>Symfony</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faDatabase} size='3x' />
                <h3 className='mt-4 mb-3'>SQL</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faCode} size='3x' />
                <h3 className='mt-4 mb-3'>Visual Studio Code</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faFigma} size='3x' />
                <h3 className='mt-4 mb-3'>Figma</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faGitAlt} size='3x' />
                <h3 className='mt-4 mb-3'>Git</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faGithub} size='3x' />
                <h3 className='mt-4 mb-3'>GitHub</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faPhp} size='3x' />
                <h3 className='mt-4 mb-3'>PHP</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faNode} size='3x' />
                <h3 className='mt-4 mb-3'>Node</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faNpm} size='3x' />
                <h3 className='mt-4 mb-3'>Npm</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <img src={cypressIcon} alt="Cypress Icon" className="cypress-icon" />
                <h3 className='mt-4 mb-3'>Cypress</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <img src={postmanIcon} alt="Cypress Icon" size='3x' className="postman-icon" />
                <h3 className='mt-4 mb-3'>Postman</h3>
                </Col>

            </Row>
        </div> 
        </div>
    );
};

export default Skills;

