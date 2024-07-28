import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <h2>P. CRISTALDO</h2>
            <div className="social-links">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-github"></i></a>
                <a href="#"><i className="bi bi-messenger"></i></a>
                <a href="#"><i className="bi bi-whatsapp"></i></a>
            </div>
            <h5>SUSCRIBETE</h5>
            <input type="email" id="email" email="email" placeholder="Escribe tu email" />
            <button>ENVIAR</button>
            <p>&copy; 2024 All rights reserved. <strong href="#">P. CRISTALDO</strong></p>
        </footer>
    );
}

export default Footer;
