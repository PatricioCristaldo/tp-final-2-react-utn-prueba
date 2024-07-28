// src/pages/about/About.jsx
import React from 'react';

function About() {
  return (
    <section class="about"  id='about'>
    <div class="container">
        <div class="about-image">
            <img src="public/images/Ejemplo2.png" alt="Patricio Cristaldo"></img>
        </div>
        <div class="about-text">
            <h2>Sobre mi</h2>
            <h3>Hola soy Patricio!</h3>
            <p>Soy desarrollador web full stack, actualmente me encuentro realizando una diplomatura en
                desarrollo web con la Universidad Tecnológica Nacional para potenciar mí conocimiento y
                habilidades.</p>
                <p>Este proyecto está desarrollado con REACT y es para el Trabajo Final Nº 2.</p>
                <br></br>
                <span>Espero que disfrutes tanto viendo mi página como yo disfrute haciendola!</span>
        </div>
    </div>
</section>
  );
}

export default About;
