import React from "react";
import avatar_me from "./Avatar_me.jpg"

function Home(){
    return(
        <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
            <h1 class="w3-jumbo"><span class="w3-hide-small">I'm</span> Oscar Robertson</h1>
            <p>Full Stack Developer</p>
            <img src={avatar_me} alt="boy" class="w3-image" style = {{width:"992", height:"1108"}} />
        </header>
    )
}

export default Home;