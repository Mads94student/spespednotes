import React from 'react';
import { Link } from 'react-router-dom';
import style from './headlist.module.css';

function Headlist() {

    return(
        <div className={style.navBar}>
            <ul>
                <Link to="/" style={{ textDecoration:'none'}}>
                    <li>Home</li>
                </Link>
            <Link to="/tiltakskjeden" style={{ textDecoration:'none'}}>
                <li>Tiltakskjeden</li>
            </Link>
            <Link to="/kartlegging" style={{textDecoration:"none"}}>
                <li>Kartlegging</li>
            </Link>
            <a  target="_blank" href="https://uiano.sharepoint.com/sites/innsia">
                <li className={style.extlink}>Innsia</li>
            </a>
            <a target="_blank" href="https://www.uia.no/student/canvas">
                <li className={style.extlink}>Canvas</li>
            </a>
            <a target="_blank" href="https://www.uia.no/student/studentweb">
                <li className={style.extlink}>Studentweb</li>
            </a>
            </ul>
        </div>
    )
}

export default Headlist;