import React from "react";

function Portfolio(){
    return(
        <div class="w3-padding-64 w3-content" id="photos">
        
            <h2 class="w3-text-light-grey">My Photos</h2>
            <hr style={{width:"200px"}} class="w3-opacity" />

        
            <div class="w3-row-padding" style={{margin:"0 -16px"}}>
            <div class="w3-half">
                <img src="/w3images/wedding.jpg" style={{width:"100%"}} />
                <img src="/w3images/rocks.jpg" style={{width:"100%"}} />
                <img src="/w3images/sailboat.jpg" style={{width:"100%"}} />
            </div>

            <div class="w3-half">
                <img src="/w3images/underwater.jpg" style={{width:"100%"}}/>
                <img src="/w3images/chef.jpg" style={{width:"100%"}} />
                <img src="/w3images/wedding.jpg" style={{width:"100%"}} />
                <img src="/w3images/p6.jpg"  />
            </div>
            
            </div>
        </div>
            
    )
}
export default Portfolio;