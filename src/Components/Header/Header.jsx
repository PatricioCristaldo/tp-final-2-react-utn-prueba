import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <div class="container">
            <div class="logo">
                <h1>P. CRISTALDO</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Principio</a></li>
                    <li><a href="#">Projectos</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Acerca de mi</a></li>
                </ul>
            </nav>
            <a href="#" class="quote-button">Cotización</a>
        </div>
    </header>
  )
}

export default Header