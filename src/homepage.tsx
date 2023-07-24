import React from "react";
import { ReactDOM } from "react";
import ProjectPage from './projectsPage'
import AboutMe from './aboutMe'

export default function () {
    return <>
        <ProjectPage></ProjectPage>
        <div className="navbar-spacer"></div>
        <AboutMe></AboutMe>
    </>
}
