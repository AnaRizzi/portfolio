import React from 'react';
import './style.css';
import ImgCard from '../ImgCard';
import github from '../../assets/img/github.png'

export default function MyCard(props){
    return(
    
        <div className="card">
            <ImgCard className="card-img-top" src={props.src} alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.children}</p>
                
            </div>
            <div className="text-center botao">
                <a href="/portfolio" className="btn btn-sm btn-primary">Detalhes</a>
                <a href={props.github} target="_blank" rel="noopener noreferrer"> <img src={github} alt="github" className="github" /> </a>
            </div>
            <div className="card-footer">
            <small className="text-muted">{props.linguagens}</small>
            </div>
        </div>

    )
}