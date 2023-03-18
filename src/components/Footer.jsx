import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/footer.css'

function Footer() {
    return (
        <footer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href='https://www.linkedin.com/in/mariangarciacabrera/' style={{ margin: '10px', color: 'white' }} >
            <FaLinkedin size='2em' />
            </a>
            <a href='https://github.com/Marian4gc' style={{ margin: '10px', color: 'white' }}>
            <FaGithub size='2em' />
            </a>
        </div>
        <p style={{ textAlign: 'center', margin: '10px' }}>© 2023 My Portfolio. All rights reserved.</p>
        </footer>
    );
}

export default Footer;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// function Footer() {
//     return (
//         <footer>
//         <div className="container">
//             <div className="row">
//             <div className="col-sm-12 text-center">
//                 <ul className="list-inline">
//                 <li className="list-inline-item">
//                     <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
//                 </li>
//                 <li className="list-inline-item">
//                     <a href="https://github.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
//                 </li>
//                 </ul>
//                 <p>&copy; Your Name</p>
//             </div>
//             </div>
//         </div>
//         </footer>
//     );
// }

// export default Footer;


