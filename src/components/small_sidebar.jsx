import React from "react";


function SmallSidebar(){
    return(
        <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
            <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                <a href="#" class="w3-bar-item w3-button" style={{width:"25% !important"}}>HOME</a>
                <a href="#about" class="w3-bar-item w3-button" style={{width:"25% !important"}}>ABOUT</a>
                <a href="#photos" class="w3-bar-item w3-button" style={{width:"25% !important"}}>PHOTOS</a>
                <a href="#contact" class="w3-bar-item w3-button" style={{width:"25% !important"}}>CONTACT</a>
            </div>
        </div>
    )
}

export default SmallSidebar;

