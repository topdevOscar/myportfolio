import React from "react";
import Home from "./home";
import About from "./about"
import Portfolio from "./portfolio";
import Contact from "./contact"
import Footer from './footer';
function Main(){

    return(
        <div class="w3-padding-large" id="main">
            <Home />
            <About />
            <Portfolio />
            <Contact />
            <Footer />

        </div>

    )
}

export default Main;