import React from "react";
import Tiltak from "./tiltakskjeden/tiltak";
import Home from "./home/home";
import { Route, Routes } from 'react-router-dom';
import Headlist from "./headlist/headlist";
import Kartlegging from "./schreening og kartlegging/kartlegging";

function App(){
    return(
        <div>
            <Headlist />
        <Routes>
            <Route exact path="/tiltakskjeden" element={<Tiltak />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/kartlegging" element={<Kartlegging />} />
        </Routes>
        </div>
    )
}

export default App;