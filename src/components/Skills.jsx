import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faSymfony, faFigma, faGitAlt, faGithub, faPhp} from '@fortawesome/free-brands-svg-icons';
import { Col, Row } from 'react-bootstrap';
import "../styles/skills.css";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';



const Skills = () => {
    return (
        <div id='skills' className='container-fluid'>
        <div className='d-flex justify-content-center my-5 fw-bold'>
            <h1 className="display-5 fw-bold skills" color="white">Skills</h1>
        </div>
        <div className="skills-icons">
            <Row className='text-center'>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faHtml5} size='4x' />
                <h3 className='mt-4 mb-3'>HTML5</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faCss3Alt} size='4x' />
                <h3 className='mt-4 mb-3'>CSS3</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faJsSquare} size='4x' />
                <h3 className='mt-4 mb-3'>JavaScript</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faReact} size='4x' />
                <h3 className='mt-4 mb-3'>React</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faBootstrap} size='4x' />
                <h3 className='mt-4 mb-3'>Bootstrap</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                    <FontAwesomeIcon icon={faSymfony} size='4x' />
                    <h3 className='mt-4 mb-3'>Symfony</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faDatabase} size='4x' />
                <h3 className='mt-4 mb-3'>SQL</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faCode} size='4x' />
                <h3 className='mt-4 mb-3'>Visual Studio Code</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faFigma} size='4x' />
                <h3 className='mt-4 mb-3'>Figma</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faGitAlt} size='4x' />
                <h3 className='mt-4 mb-3'>Git</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faGithub} size='4x' />
                <h3 className='mt-4 mb-3'>GitHub</h3>
                </Col>
                <Col xs={6} md={3} className='p-4'>
                <FontAwesomeIcon icon={faPhp} size='4x' />
                <h3 className='mt-4 mb-3'>PHP</h3>
                </Col>
            </Row>
        </div> 
        </div>
    );
};

export default Skills;

