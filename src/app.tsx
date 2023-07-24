import React from "react";
import { ReactDOM } from "react";
import Navbar from './navbar';
import ProjectPage from './projectsPage'
import AboutMe from './aboutMe'

export default function () {
    return <>
        <Navbar></Navbar>
        <ProjectPage></ProjectPage>
        <div className="navbar-spacer"></div>
        <AboutMe></AboutMe>
    </>
}
