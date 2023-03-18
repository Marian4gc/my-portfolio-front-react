import React from "react";
import { Link } from 'react-router-dom';
import "../styles/home.css";

function Home() {
    return (
        <div className="text_home">
        <div className="px-4 py-5 my-5 text-center">
            <h2>Hi, my name is</h2>
            <h1 className="display-5 fw-bold">Marian García.</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">I love being able to translate my ideas with the code</p>
                        <h3>I am Junior FullStack Developer</h3>
                    </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="repo">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3 mira">Check out my work!</button>
                    </Link>
            </div>
        </div>
        </div>
    );
}

export default Home;
