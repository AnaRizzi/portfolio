import React from 'react';
import logoClaro from '../../assets/img/anaRizziClaro.png';
import './style.css';
import {Link} from 'react-router-dom'

export default function Menu(){
    return(
        <header>
            <nav class="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
                <Link to="/" class="navbar-brand"><img src={logoClaro} className="logoMenu" alt="Ana Rizzi"/> </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/sobre" class="nav-link">Sobre</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/portfolio" class="nav-link">Portfólio</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/contato" class="nav-link">Contato</Link>
                    </li>
                    </ul>
                    
                </div>
            </nav>
        </header>
    )
}