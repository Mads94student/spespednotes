import React from 'react';
import Data from './begreper.json';
import style from './contentsogk.css';

function ContentSogK() {
    return(
        <div className={style.container}>
            <div className={style.card}>
                <h1>Schreening</h1>
            <p>{Data.begreper.schreening}</p>
                <h1></h1>
            </div>
        </div>
    )
}

export default ContentSogK;