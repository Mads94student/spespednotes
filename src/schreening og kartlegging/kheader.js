import React from 'react';
import style from '../templates/header.module.css'
import logo from '../bilder/kartlegging.jpg'

function Kheader(props) {
    return(
        <div className={style.container}>
            <div className={`${style.card} ${style.head}`}></div>
            <h1>
                {props.name}
            </h1>
            <img className={style.card} src={logo} alt={props.alt}></img>
        </div>
    )
}

export default Kheader;