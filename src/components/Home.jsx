import React from "react";
import { Link } from 'react-scroll';
import "../styles/home.css";
import NavBar from './NavBar';

function Home() {
    return (
        <>
        <NavBar />
        <div className="text_home" id="home">
        <div className="px-4 py-5 my-5 text-center">
            <h2>Hi, my name is</h2>
            <h1 className="display-5 fw-bold">Marian García.</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">I love being able to translate my ideas with the code</p>
                        <h3>I am Junior FullStack Developer</h3>
                    </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link
                    to="repos"
                    smooth={true}
                    offset={-100}
                    duration={1000}
                >
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3 mira">Check out my work!</button>
                </Link>
            </div>
        </div>
        </div>
        </>
    );
}

export default Home;
