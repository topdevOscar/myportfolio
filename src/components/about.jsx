import React from "react";


import TestMonial from "./TestMonial"

function About(){

    return(
        <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
            <h2 class="w3-text-light-grey">Oscar Robertson</h2>
                <hr style={{width:"200px"}} class="w3-opacity" />
                <p>Senior fullstack developer with over 7 years of hands-on experience in website development with React-redux, MERN, Node.js, MongoDb etc. Extensive knowledge of back-end and front-end development with majority of modern web frameworks. Skills in App development with 5֡ years of experience as freelancer and in some companys.
                </p>
                <h3 class="w3-padding-16 w3-text-light-grey">My Skills</h3>
                <p class="w3-wide">Web Development</p>
                <div class="w3-white">
                <div class="w3-dark-grey" style={{height:"28px", width:"100%"}}></div>
                </div>
                <p class="w3-wide">AppDevelopment</p>
                <div class="w3-white">
                <div class="w3-dark-grey" style={{height:"28px", width:"95%"}}></div>
                </div>
                <p class="w3-wide">E-Commerce & Blockchain</p>
                <div class="w3-white">
                <div class="w3-dark-grey" style={{height:"28px", width:"90%"}}></div>
                </div><br />
    
            <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
                <span class="w3-xlarge">11+</span><br />
                Partners
            </div>
            <div class="w3-quarter w3-section">
                <span class="w3-xlarge">55+</span><br />
                Projects Done
            </div>
            <div class="w3-quarter w3-section">
                <span class="w3-xlarge">89+</span><br />
                Happy Clients
            </div>
            <div class="w3-quarter w3-section">
                <span class="w3-xlarge">150+</span><br />
                Meetings
            </div>
            </div>

            <button class="w3-button w3-light-grey w3-padding-large w3-section">
            <i class="fa fa-download"></i> Download Resume
            </button>
    
    
        
        <h3 class="w3-padding-16 w3-text-light-grey">My Price</h3>
        <div class="w3-row-padding" style={{margin:"0 -16px"}}>
      <div class="w3-half w3-margin-bottom">
        <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
          <li class="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
          <li class="w3-padding-16">Web Design</li>
          <li class="w3-padding-16">Photography</li>
          <li class="w3-padding-16">5GB Storage</li>
          <li class="w3-padding-16">Mail Support</li>
          <li class="w3-padding-16">
            <h2>$ 10</h2>
            <span class="w3-opacity">per month</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
          </li>
        </ul>
      </div>

      <div class="w3-half">
        <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
          <li class="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
          <li class="w3-padding-16">Web Design</li>
          <li class="w3-padding-16">Photography</li>
          <li class="w3-padding-16">50GB Storage</li>
          <li class="w3-padding-16">Endless Support</li>
          <li class="w3-padding-16">
            <h2>$ 25</h2>
            <span class="w3-opacity">per month</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
          </li>
        </ul>
      </div>
      </div>
        
        <TestMonial />
    </div>
    )
}

export default About;