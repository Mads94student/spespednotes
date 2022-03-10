import React from "react";
import Header from '../templates/header.js';

import { Content } from './content.js';

function Tiltak(){
    return(
        <div>
            <Header name="PED 153 - Tiltakskjeden" alt="picture of tiltakskjeden" />
            <Content />
        </div>
    )
}

export default Tiltak;