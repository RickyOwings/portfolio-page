import React, {Component, useState} from "react";
import { ReactDOM } from "react";
import Homepage from './homepage';
import Music, {VolumeSlider} from './music';
import Navbar, {NavbarHrefLocal, SiteChange} from './navbar';

let page = "homepage";
interface ContentProps {
    children: ReactDOM;
}

export default function () {
    const links = {
        homepage: [
            <NavbarHrefLocal key="aboutme" href="#aboutme">About Me</NavbarHrefLocal>,
            <SiteChange callback={toMusic} key="tomusic">My Music</SiteChange>
        ],
        music: [
            <NavbarHrefLocal key="about" href="#about">About</NavbarHrefLocal>,
            <SiteChange callback={toHomepage} key="tohomepage">Homepage</SiteChange>,
            <VolumeSlider></VolumeSlider>
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


    return <>
        <Navbar links={currentLinks}></Navbar>
        {content}
    </>
}
