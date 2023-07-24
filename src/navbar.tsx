import React, {ReactNode} from "react";
import { ReactDOM } from "react";
import ThemeChanger from "./themeChanger"



interface NavbarHrefLocalProps {
    href: string;
    children: ReactNode;
}

export function NavbarHrefLocal(props: NavbarHrefLocalProps){
    return <a className="tc-pri selectable passesTheme" role="button" href={props.href}>{props.children}</a>
}


interface SiteChangeProps {
    children: ReactNode;
    callback: ()=> void;
}

export function SiteChange(props: SiteChangeProps){
    return <a className="tc-pri selectable passesTheme" onClick={props.callback} role="button">{props.children}</a> 
}


export type NavbarLink = Element | typeof SiteChange;


interface NavbarProps {
    links: ReactNode[] 
}


export default function (props: NavbarProps){
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
              {...props.links}
              <ThemeChanger/>
            </div>
          </div>
        </div>
      </nav>
      <div className="navbar-spacer"></div>
    </>
}
