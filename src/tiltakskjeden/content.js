import React, {useState} from 'react';
import style from './content.module.css'
import data from './tiltakskjeden.json'
import tiltak from '../bilder/tiltakskjeden.JPG'
import tiltaktabell from '../bilder/tiltakskjedetabell.JPG'

export function Content() {
    const [bilde, setBilde] = useState(false)
    const [bilde2, setBilde2] = useState(false)

    function toogleBilde() {
        bilde ? setBilde(false) : setBilde(true)
    }
    function toogleBilde2() {
        bilde2 ? setBilde2(false) : setBilde2(true)
    }

    return(
        <div className={style.container}>
                        <div className={style.card}>
                <h1>{data[5].emne}</h1>
                <ul>
                    <li>{data[5].info1.fase1}</li>
                    <li>{data[5].info1.fase2}</li>
                    <li>{data[5].info1.fase3}</li>
                    <li>{data[5].info1.fase4}</li>
                    <li>{data[5].info1.fase5}</li>
                    <li>{data[5].info1.fase6}</li>
                </ul>
                <p>{data[5].info2}</p>
                <button className={style.btn} onClick={toogleBilde}>Se tiltakskjeden</button>
                <button className={style.btn} onClick={toogleBilde2}>Se tiltakskjedetabell</button>
                <p>
                {bilde ? <img className={style.bilde} src={tiltak} alt="Bilde av tiltakskjeden"></img> : null}
                </p>
                <p>
                {bilde2 ? <img className={style.bilde} src={tiltaktabell} alt="Tabell"></img> : null}
                </p>
            </div>
            <div className={style.card}>
                <h1>{data[0].emne}</h1>
                <p>{data[0].info1}</p>
                <p>{data[0].info2}</p>
            </div>
            <div className={style.card}>
                <h1>{data[1].emne}</h1>
                <p>{data[1].info1}</p>
                <p>{data[1].info2}</p>
                <p>{data[1].info3}</p>
            </div>
            <div className={style.card}>
                <h1>{data[2].emne}</h1>
                <p>{data[2].info1}</p>
                <p>{data[2].info2}</p>
            </div>
            <div className={style.card}>
                <h1>{data[3].emne}</h1>
                <p>{data[3].info1}</p>
                <p>{data[3].info2}</p>
            </div>
            <div className={style.card}>
                <h1>{data[4].emne}</h1>
                <p>{data[4].info1}</p>
                <p>{data[4].info2}</p>
            </div>

        </div>
    )
}