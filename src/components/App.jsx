import React from "react";
import Navbar from "./Navbar";
import Apresentacao from "./Apresentacao";
import About from "./About";
import Compete from "./Compete";
import Projects from "./Projects";
import Contact from "./Contact";
import Pe from "./Pe";


function App(){
    return (
        <div>
            <Navbar/>
           <Apresentacao/>
            <About/>
            <Compete/>
            <Projects/>
            <Contact/>
            <Pe/>
        </div>
    );
}


export default App;