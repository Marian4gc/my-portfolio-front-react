import React from 'react'
import foto from '../assests/fotoMarian.jpg'
import '../styles/aboutme.css'

function AboutMe() {
    return (
    <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={foto} className="d-block mx-lg-auto img-fluid foto" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3 who">Who is Marian?</h1>
                        <p className="lead">¡Hi! I am a woman who just entered this world of code and I have discovered that I am passionate. I try to look for problems, solve them and learn them. I like to overcome the challenges and be able to create web applications and follow the designs I imagine.
                        I have studied a Bootcamp Full-Satck developer of 850h, but I am still very curious to continue learning and advancing. If you want you can contact me.</p>
                </div>
            </div>
    </div>
    );
}

export default AboutMe
