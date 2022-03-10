import React from "react";
import { Link } from 'react-router-dom'
import Data from './filenames.json';
import tiltakimg from '../bilder/spesped.jpg'
import style from './hometable.module.css'
import kartleggingimg from '../bilder/kartlegging.jpg'


function Hometable() {
    return(
        <div className={style.container}>
            <Link to='/tiltakskjeden' style={{textDecoration:'none'}}>
                <div className={style.card}>
                    <img src={tiltakimg} alt="tiltak image" width="300px" height="200px"></img>
                    <h1>{Data.tiltakskjeden.name}</h1>
                    <p>{Data.tiltakskjeden.info}</p>
                </div>
            </Link>
            <Link to='/kartlegging' style={{textDecoration:'none'}}>
                <div className={style.card}>
                    <img src={kartleggingimg} alt="kartlegging image" width="300px" height="200px"></img>
                    <h1>{Data.kartlegging.name}</h1>
                    <p>{Data.kartlegging.info}</p>
                </div>
            </Link>
        </div>
    )
}

export default Hometable;