import React from 'react';
import style from './header.module.css'
import logo from '../bilder/spesped.jpg'

function Header(props) {
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

export default Header;