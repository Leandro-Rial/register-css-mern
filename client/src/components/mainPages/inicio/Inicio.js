import React from 'react';
import {Link} from 'react-router-dom';
import './inicio.css'

function inicio() {
    return (
        <div className="Inicio">

            <div className="image-inicio">
                <h1>Welcome</h1>
                <h3>The Barras</h3>
            </div>

            <div className="our-history">
                <h1>View Our History</h1>
                <Link to="/our-history">Our History</Link>
            </div>

            <div className="contact">
                <h1>Contact Us</h1>
                <Link to="/contact">Contact</Link>
            </div>

        </div>
    )
}

export default inicio
