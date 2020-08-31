import React from 'react';
import logoClaro from '../../assets/img/anaRizziClaro.png';
import './style.css';
import {Link} from 'react-router-dom'

export default function Menu(){
    return(
        <header>
            <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
                <Link to="/" className="navbar-brand"><img src={logoClaro} className="logoMenu" alt="Ana Rizzi"/> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/sobre" className="nav-link">Sobre</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/projetos" className="nav-link">Portfólio</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/contato" className="nav-link">Contato</Link>
                    </li>
                    </ul>
                    
                </div>
            </nav>
        </header>
    )
}