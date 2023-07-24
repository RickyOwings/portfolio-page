import React, {ReactNode} from "react";
import { ReactDOM } from "react";
import ThemeChanger from "./themeChanger"

export default function (){
    let oldScroll = window.scrollY;
    let style = {
        opacity: '1'
    }
    const id = 'navbar'

    window.onscroll = () => {
        const newScroll = window.scrollY; 
        const deltaScroll = newScroll - oldScroll



        if (deltaScroll > 0) hideNavbars();
        else showNavbars();
        oldScroll = newScroll;
    }

    const hideNavbars = () : void =>{
        document.getElementById(id).style.setProperty("opacity", "0");
    }
    const showNavbars = () : void =>{
        document.getElementById(id).style.setProperty("opacity", "1");
    }

    return <>
      <nav className="navbar navbar-expand-lg" id={id} style={style}>
        <div className="container-fluid">
            <video muted autoPlay={true} loop width="32px" poster="./images/my_face.png">
              <source src="./images/my_face.webm"></source>
            </video>
          <div className="navbar-brand">
            {'\u00A0'}Ricky's Portfolio
          </div>
          <button className="navbar-toggler selectable" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon color-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="tc-pri selectable" href="#projects" role="button">Projects</a>
              <a className="tc-pri selectable" href="#aboutMe" role="button">About Me</a>
              <a className="tc-pri selectable" href="#contactInformation" role="button">Contact Information</a>
              <a className="tc-pri selectable passesTheme" href="./music.html?theme=light" role="button">My Music</a>
              <ThemeChanger/>
            </div>
          </div>
        </div>
      </nav>
      <div className="navbar-spacer"></div>
    </>
}
