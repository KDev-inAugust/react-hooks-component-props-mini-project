import React from "react";

function About({imageSource="https://via.placeholder.com/215", about}){
    return(
        <aside>
            <img src={imageSource} alt='blog logo'></img>
            <p>{about}</p>
        </aside>
    )
}

export default About;