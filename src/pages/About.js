import React from 'react';
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css"

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Architecto tempora aspernatur provident molestias minima asperiores, modi 
                    nulla, eligendi voluptas dolor ex est totam dolorum fugit repellendus autem 
                    laboriosam omnis voluptatibus sint. Enim soluta incidunt repellat eaque accusamus
                    non placeat, vitae recusandae corrupti reprehenderit a optio nihil cumque numquam hic 
                    earum labore, nisi odit itaque laboriosam inventore laudantium. Porro perferendis excepturi 
                    officia molestiae autem totam accusantium tempore eius odit, non, id ipsam magni temporibus 
                    repudiandae. Beatae rerum quibusdam consequuntur est cumque unde enim debitis nesciunt, ut aut 
                    saepe dolorem ducimus ad impedit praesentium dolores nemo delectus natus minima voluptate eaque vel.
                </p>
            </div>
        </div>
    )
}

export default About