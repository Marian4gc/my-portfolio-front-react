import React from 'react';
import { Form, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styles/contact.css'

function Contact() {



  return (

    <div>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="display-5 fw-bold text-center work" id='contact' >Contact</h2>
        <hr className="featurette-divider"></hr>

        <p class="lead mb-4 text-center">Do not hesitate to contact me if you want to know more</p>
      </div>

      <div className="container px-4 py-5 text-center">
        <button data-text="Awesome" class="button">
          <span class="actual-text">&nbsp;mariangarcia1724@gmail.com&nbsp;</span>
          <span class="hover-text" aria-hidden="true">&nbsp;mariangarcia1724@gmail.com&nbsp;</span>
        </button>
      </div>




      <div className="p-3 rounded border border-secondary bg-transparent mx-auto contact">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
          </Form.Group>

          <div className="d-grid gap-2 d-sm-flex" style={{ textAlign: "center", justifyContent: "center" }}>
            <Link to="#">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3 submt">Submit</button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact;

