import React, {ReactNode} from "react";
import { ReactDOM } from "react";
import CDiv from "./centerDiv";

interface SectionProperties {
    title: string; 
    children: ReactNode;
}
function ExpandSection(props: SectionProperties){
    const id = props.title.toLowerCase().replace(/ /g, "");
    const target = "#" + id;
    return <>
        <h5 className="centered selectable ninety-width" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls={id}>{props.title}</h5>
        <div id={id} className="collapse">{props.children}</div>
    </>
}

function MoreAboutMe(): ReactNode{
    return <div className="sec center-elements content-width">
        <p className="centered small-text">click to expand topics</p>
        <ExpandSection title="Programming">
            <img src="./images/garrysmod.png" alt="" className="img-width centered"></img>
            <p>
                When I was in school, I would play a game called <a href="https://gmod.facepunch.com/" target="_blank">Garry's Mod</a>. There was a modification to the game called <a href="https://www.wiremod.com/" target="_blank">Wiremod</a> which would allow you to essentially program within the game. This was the first thing that really got me into it. They did try to introduce programming in school with <a href="https://scratch.mit.edu/" target="_blank">Scratch</a>, but it did not really get me too interested because of how tedious it was to use. I would be constantly searching for that one code block that I wanted through the menus.
            </p>
            <p>
                Wiremod was a really cool mod for Garry's Mod. The basic idea of Wiremod is to add basic functionality to different things in the game with buttons and logic. You could connect components together, like buttons and thrusters, with wires, hence the name Wiremod. The neat thing is that there were different gates that you could use such as "and" and "or" gates. This would allow you to, for example, have two buttons that are required to be pressed at the same time in order for something to happen. If your logic got too complicated, however, you could relegate the logic that you would manually have to build out to an "e2" chip which could do the logic for you in one chip. The main caveat of the "e2" chip was that you would have to program out the logic in a programming language called "Expression 2" which is built on top of lua.            
            </p>
            <p>
                In Garry's mod, I  make cars and tanks for fun. All the vehicles I would make in the game were all physics based, so I would have to build out the suspension and steering. I could have wired a lot of the logic for the controls manually, but I would often use an Expression 2 chip instead to relegate all of the control logic over to on chip so that I did not have all these props everywhere. Because I was using the Expression 2 chips, it was super easy for me to implement things such as a system to tense up the steering angle on my cars so that the faster that I was going, the less it would steer the car so that I would not loose control at high speeds.
            </p>
            <h6 className="underline">First Online Course</h6>
            <img src="./images/codecademy.png" alt=""  className="img-width centered"></img>
            <p>
                I took an online course called <a href="https://www.codecademy.com/" target="_blank">Codecademy</a>, which taught me the grammer of the Javascript language. Although it was not really that good for actually learning how to employ the language on its own, it was a good steping stone for getting into the programming mindset. The rest of my initial knowledge at the time came through watching tutorials on <a href="https://www.youtube.com/" target="_blank">Youtube</a> and finding things on <a href="https://stackoverflow.com/" target="_blank">Stack Overflow</a>.
            </p>
            <h6 className="underline">First Project</h6>
            <p>
                The first project that I made that I was pretty proud of was <a href="#kesslerKnockout">Kessler Knockout</a>. I was halfway through the Codecademy course when I made it, so I had to just hack it together with some of the concepts that I understood at the time. While I definetely cringe at the code looking back at it now, it was something that really got me into programming as a whole.
            </p>
            <h6 className="underline">More Projects</h6>
            <p>
                After that, I would make projects for the fun of it. I would learn a lot through just trying to make something that I would find cool and interesting. Because I am an avid gamer, a lot of those things were games! </p>
            <h6 className="underline">Increasing My Efficieny...</h6>
            <img src="./images/vscodevim.png" alt=""  className="img-width centered"></img>
            <p>
                When I was programming things, I was getting kind of annoyed. It felt very inconvenient to take my hand and slightly move it to the bottom right hand corner of my keyboard. I then randomly found an extension on <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> called <a href="https://marketplace.visualstudio.com/items?itemName=vscodevim.vim" target="_blank">VIM</a>. It took time to get used to the keybinds for it, but it was definetely worth it! I will always look for a way to use the VIM keybinds in any sofware I use for now on. At the time, I did not know that it was a full blown text editor. I have not moved over to it entirely just yet, but I have dabbled quite a bit with it already.
            </p>
            <h6 className="underline">My First Certification</h6>
            <img src="./images/certification.png" alt=""  className="img-width centered"></img>
            <p>
                I wanted to learn more about programming while getting some credentials in the process. I decided to take the Harvard <a href="https://cs50.harvard.edu/x/2023/" target="_blank">CS50x</a> course in order to achieve that goal. It was a really fun course and I learned a lot through doing it.
            </p>
            <h6 className="centered">Using NVIM</h6>
            <img src="./images/nvim_terminal.png" alt=""  className="img-width centered"></img>
            <p>
                While I was taking the course, I thought it would be fun to use <a href="https://neovim.io/" target="_blank">NVIM</a> to take my notes, so I did. In doing so, I learned a bit about configuring my VIMRC. One thing that I had configured was for making it so that if a line goes off of the screen, insead of wrapping half way through the word, it would do word wrapping and also preserve the indentation. I am still a novice at using NVIM, but I will hopefully get better as time goes on and I might be able to use it as my main IDE at some point.
            </p>
            <h6 className="centered">Coding in C</h6>
            <p>
                In the first five weeks of the course, they used the C language. Because we were programming in C, they covered managing your ram usage for an application via using malloc, free, and realloc a bit. They also introduced pointers, which was a completely foriegn concept coming from Javascript. One thing that I found interesting was how similar the syntax was for Javascript when comparing it to C.
            </p>
            <h6 className="centered">Everything Else</h6>
            <p>
                After C, they got into Python, SQL, and Web Code (HTML, CSS, JAVASCRIPT, and FLASK). Since I had quite a bit of experience programing at this point, it was pretty easy to convert my knowledge to a different language such as Python. SQL was completely different, as it's use case is for databases. I would say that it is the language that I have the least experience with, but I do understand it based off of what we did with it in the course. The Web Code portion was basically review for what I already knew. The only main curveball was FLASK, which was pretty fun once I figured it out.
            </p>
            <h6 className="centered">Final Project</h6>
            <p>
                The final project for the course that I made was <a href="#conveyor">Conveyor</a>. I had the idea for it while I was making the course, so I decided to make it as my final project. It is not entirely original, as it is inspired by the likes of Factorio and Minecraft, but I solved a lot of problems while I was making it. It is probably the most complicated thing that I have made to date, with around 1,200 lines of code! While I was making it, I did not want to get stuck up on just trying to figure out how to layout the game, so the code is a little bit messy. The end product, however, I am really happy with. One thing that I did differently with this game was the way that it was made. Most of my games up to this point were made using a canvas element. This one actually just uses different HTML elements for the things in game. One upside to doing it this way is that it enables you to use CSS animations for some of the things in the game.
            </p>
        </ExpandSection>

        <ExpandSection title="3D Modeling">
            <h6 className="underline">Introduction</h6>
            <p>
                On my free time, I got into this 3d Modeling software called <a href="https://www.blender.org/" target="_blank">Blender</a>. With it, you can create basically anything you can imagine. I got sucked into these tutorials on Youtube talking about what you can do with the software. I highly recommend getting into it. Since it is free, the barrier for entry is just to download it.
            </p>
            <h6 className="underline">Node System</h6>
            <img src="./images/blender_nodes_example.png" alt=""  className="img-width centered"></img>
            <p>
                One thing that I really like about Blender is the node system. With it, you can basically connect these different blocks together that have different logic in order to achieve, for example, a texture for an object. The nodes are basically just a graphical programming language in a sense. It is really fun to use once you can wrap your head around it.
            </p>
            <h6 className="underline">Addons</h6>
            <img src="./images/myface_in_blender.png" alt=""  className="img-width centered"></img>
            <div className="small-text centered">I look so sad lol</div>
            <p>
                There are different addons that you can get for Blender. A while back, I got an addon for Blender called <a href="https://keentools.io/download/facebuilder-for-blender" target="_blank">FaceBuilder</a>. With it, you can take a bunch of picture revolving around your face, and morph this template face to fit your face. This is just one of the thousands of addons that people have made for Blender. You can find a lot of them on the <a href="https://blendermarket.com/" target="_blank">Blender Market</a>
            </p>
        </ExpandSection>
    </div>
}

function ContactInfo(){
    return <>
        <div className="navbar-spacer"></div>
        <div className="sec center-elements content-width">
          <h5 id="contactinformation"className="centered">Contact Information</h5>
            <div><img src="./images/email.png" alt="" width="20" className="color-icon"></img> rickyowings@gmail.com</div>
            <div><img src="./images/github.png" alt="" width="20" className="color-icon"></img> <a href="https://github.com/RickyOwings" target="_blank">https://github.com/RickyOwings</a></div>
          <p className="small-text">Icons are from <a href="https://www.flaticon.com/authors/freepik" target="_blank">freepik</a></p>
        </div>
        <div className="bottom-spacer"></div>

    </>
}

export default function () {
    return <CDiv>
        <h4 id="aboutme">About Me</h4>
        <p className="content-width">
            I am an aspiring programmer. I started when I was in high school and I really took a liking to the practice. It is a never ending rabbit hole of discovery and learning. Hopefully I can get into the field some day as it is something I really enjoy to do.
        </p>
        <MoreAboutMe></MoreAboutMe>
        <ContactInfo></ContactInfo>
    </CDiv>
}


