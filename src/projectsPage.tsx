import React from "react";
import { ReactDOM } from "react";
import Project from './project'
import CDiv from "./centerDiv";

export default function () {
    return <CDiv>
        <h4 id="projects">Projects</h4>
        <div className="projects-container">

            <Project 
                title="Conveyor" 
                imgSrc="./images/conveyor.png"
                link="https://rickyowings.github.io/conveyor/"
                isRepo={false}
            >
                Tiled conveyor belt game. Made using Javascript, HTML, CSS, and Bootstrap. Does not use canvas element!
            </Project>           

            <Project 
                title="Simple Box Platformer" 
                imgSrc="./images/Simple Box Platformer.png"
                link="https://rickyowings.github.io/simple-box-platformer/"
                isRepo={false}
            >
                Platformer game that I made using HTML, CSS, and Typescript. Simple graphics, inspired by Worlds Hardest Game. If you are not goot at platformers, then you probably would not like it because it is difficult <br></br><br></br>

                I made the project using a different workflow. I had a "developement folder" that has snowpack. Snowpack would then pack that into a "build" folder within the dev folder. I then, ouside that folder, have a "sh" linux script that moves the files to a static folder so that I can push to a git repository.
            </Project>

            <Project 
                title="Dogfight" 
                imgSrc="./images/dogfightScreenshot.png"
                link="https://rickyowings.github.io/dogfight"
                isRepo={false}
            >
                Game built off the original idea of Missile Dodge. There were several things about Missile Dodge that I wanted to improve on, so I rewrote the whole code base in typescript. A lot of the drawing functions had to be custom made in order to achieve the pixelated look, for example, the draw line functions.

            </Project>

            <Project 
                title="Missile Dodge" 
                imgSrc="./images/missile_dodge_v2.png"
                link="https://rickyowings.github.io/Missile-Dodge"
                isRepo={false}
            >
                Dodge enemy missiles from incoming ground installations. The missiles will aim where you are going to be, not where you are. Made with vanilla HTML, CSS, and Javascript
            </Project>

            <Project 
                title="Fighting Game" 
                imgSrc="./images/fighting-game.png"
                link="https://rickyowings.github.io/Fighting-Game/"
                isRepo={false}
            >
                Local multiplayer game based off the likes of street fighter. Made with HTML, CSS, and Javascript
            </Project>

            <Project 
                title="Terminal Typing" 
                imgSrc="./images/terminal_typing.webm"
                poster="./images/terminal_typing.png"
                isVideo={true}
                link="https://github.com/RickyOwings/terminal_typing_v2"
                isRepo={true}
            >
                Terminal application I made using <a href="https://nodejs.org/en" target="_blank">NODEJS</a>. It is a typing application that randomly generates text so you can do a typing test. You can import custom txt files to test with in the "./data/words" folder. You can add as many txt files as you want, and it will dynamically increase your choices when you run the app.
            </Project>

            <Project 
                title="Kessler Knockout" 
                imgSrc="./images/kessler_knockout_v2.png"
                link="https://rickyowings.github.io/Kessler-Knockout/"
                isRepo={false}
            >
                Gravitationally based bullet hell game. One of my older projects. Made with HTML, CSS, and mostly Javascript
            </Project>

        </div>
    </CDiv>
}
