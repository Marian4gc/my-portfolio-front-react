import React from 'react'
import foto from '../assests/fotoMarian.jpg'
import '../styles/aboutme.css'

function AboutMe() {
    return (
    <div className="container col-xxl-8 px-4 py-5" id="about">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={foto} className="d-block mx-lg-auto img-fluid foto" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3 who">Who is Marian?</h1>
                        <p className="lead">Hi! I am a woman who has just entered the world of coding and discovered my passion for it. I enjoy identifying and solving problems while continuously learning. Overcoming challenges and bringing my design ideas to life in the form of web applications is what excites me. I have completed an 850-hour Full-Stack Developer Bootcamp, but my curiosity to keep learning and advancing remains insatiable. Feel free to get in touch if you'd like to connect.</p>
                </div>
            </div>
    </div>
    );
}

export default AboutMe
