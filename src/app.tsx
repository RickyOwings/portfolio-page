import React, {Component, useState} from "react";
import { ReactDOM } from "react";
import Homepage from './homepage';
import Music, { VolumeSlider } from './music';
import Modeling from './modeling'
import Navbar, { NavbarHrefLocal, SiteChange } from './navbar';

let page = "homepage";
interface ContentProps {
    children: ReactDOM;
}

// test comment

export default function () {
    const links = {
        homepage: [
            <NavbarHrefLocal key="aboutme" href="#aboutme">About Me</NavbarHrefLocal>,
            <SiteChange callback={toMusic} key="tomusic">To My Music</SiteChange>,
            <SiteChange callback={toModeling} key="tomodeling">To 3d Models</SiteChange>
        ],
        music: [
            <NavbarHrefLocal key="about" href="#about">About</NavbarHrefLocal>,
            <SiteChange callback={toHomepage} key="tohomepage">To Homepage</SiteChange>,
            <VolumeSlider></VolumeSlider>
        ],
        modeling: [
            <SiteChange callback={toHomepage} key="tohomepage">To Homepage</SiteChange>,

        ],
    }
    var [currentLinks, setLinks] = useState(links.homepage)
    var [content, setContent] = useState(<Homepage></Homepage>);
    function toMusic(){
        setContent(<Music></Music>);
        setLinks(links.music);
    }

    function toHomepage(){
        setContent(<Homepage></Homepage>);
        setLinks(links.homepage);
    }

    function toModeling(){
        setContent(<Modeling></Modeling>);
        setLinks(links.modeling);
    }


    return <>
        <Navbar links={currentLinks}></Navbar>
        {content}
    </>
}
