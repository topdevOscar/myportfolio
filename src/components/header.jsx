import React from "react";
import avatar_me from "./Avatar_me.jpg"
import ReactDOM from 'react-dom/client';
import LoginForm from "./loginform";
import SignupForm from "./signupform";

function Header(){
    const handleLoginClick = () => {
    
        const newWindow =  window.open('', "_blank", "width=400,height=400");
        newWindow.document.write('<html><body><div id="my-component-container"></div></body></html>');
        const login = ReactDOM.createRoot(newWindow.document.getElementById('my-component-container'));
        login.render(
            <LoginForm />

    );}
    const handleSignUpClick = () => {
    
        const newWindow =  window.open('', "_blank", "width=400,height=400");
        newWindow.document.write('<html><body><div id="my-component-container"></div></body></html>');
        const login = ReactDOM.createRoot(newWindow.document.getElementById('my-component-container'));
        login.render(
          
          <SignupForm />
          
    );}

    return(
        <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        
            {/* <img src={avatar_me}  style= {{width:"100%"}} /> */}
            <a href="#" class="w3-bar-item w3-button w3-padding-large w3-black">
                <i class="fa fa-home w3-xxlarge"></i>
                <p>HOME</p>
            </a>
            <a href="#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <i class="fa fa-user w3-xxlarge"></i>
                <p>ABOUT</p>
            </a>
            <a href="#photos" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <i class="fa fa-eye w3-xxlarge"></i>
                <p>PHOTOS</p>
            </a>
            <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <i class="fa fa-envelope w3-xxlarge"></i>
                <p>CONTACT</p>
            </a>
            <a onClick={handleSignUpClick} class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <i class="fa fa-user-plus w3-xxlarge"></i>
                <p>Signup</p>
            </a>
            <a onClick={handleLoginClick} class="w3-bar-item w3-button w3-padding-large w3-hover-black">
                <i class="fa fa-sign-in w3-xxlarge"></i>
                <p>Login</p>
            </a>
        </nav>

    )
}

export default Header;

