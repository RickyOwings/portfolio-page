import React, {ReactNode} from "react";
import { ReactDOM } from "react";

interface ProjectProps {
    title: string;
    children: ReactNode;
    imgSrc: string;
    link: string;
    isRepo: boolean;
    isVideo?: boolean;
    poster?: string; 
}

export default function (props: ProjectProps) {
    const linkText = (props.isRepo) ? "Repository" : "Link (Made for Desktop!)";
    const id = props.title.toLowerCase().replace(/ /g, "");
    const target = "#" + id;
    const display = (props?.isVideo && props?.poster) 
        ? <video preload="yes" muted width="32px" className="img-width centered" autoPlay={true} poster={props.poster}>
            <source src={props.imgSrc}></source>
        </video>
        : <img src={props.imgSrc} alt="" className="img-width centered"></img>

    return <>
        <div className="center-elements sec content-width">
            <h6>{props.title}</h6>
            {display}
            <div className="justify-elements">
              <a className="tc-pri selectable" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls="aboutMissile" href={target}>About</a>
              <a className="tc-pri selectable" href={props.link} target="_blank">{linkText}</a>
            </div>
            <p className="collapse centered about" id={id}>
            {props.children}
            </p>
        </div>
    </>
}
