import React, {Component, useState} from "react";
import { ReactDOM } from "react";
const targetWidth: number = 800;
const targetHeight = 9 * targetWidth / 16;

const HBotID = `hoverbot`
const HoverBot = <div className="center-elements sec" dangerouslySetInnerHTML={{__html: `<div class="sketchfab-embed-wrapper"> <iframe title="Alarm Clock" id="${HBotID}" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/39b75fde8f2641c8bef97b7b50d699ff/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/alarm-clock-8bf6eaa83c6c40b8a933bb94b731a1a2?utm_medium=embed&utm_campaign=share-popup&utm_content=8bf6eaa83c6c40b8a933bb94b731a1a2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Hover Bot </a> by <a href="https://sketchfab.com/rickyowings?utm_medium=embed&utm_campaign=share-popup&utm_content=8bf6eaa83c6c40b8a933bb94b731a1a2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ricky Owings </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8bf6eaa83c6c40b8a933bb94b731a1a2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`}}></div>


const AClockID = `alarmclock`
const AlarmClock = <div className="center-elements sec" dangerouslySetInnerHTML={{__html: `<div class="sketchfab-embed-wrapper"> <iframe title="Alarm Clock" id="${AClockID}" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/8bf6eaa83c6c40b8a933bb94b731a1a2/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/alarm-clock-8bf6eaa83c6c40b8a933bb94b731a1a2?utm_medium=embed&utm_campaign=share-popup&utm_content=8bf6eaa83c6c40b8a933bb94b731a1a2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Alarm Clock </a> by <a href="https://sketchfab.com/rickyowings?utm_medium=embed&utm_campaign=share-popup&utm_content=8bf6eaa83c6c40b8a933bb94b731a1a2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ricky Owings </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8bf6eaa83c6c40b8a933bb94b731a1a2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`}}></div>

const AChairID = `armchair`
const ArmChair = <div className="center-elements sec" dangerouslySetInnerHTML={{__html: `<div class="sketchfab-embed-wrapper"> <iframe title="Armchair" id="${AChairID}" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/ec6834dc6fcf471988769abe0fbd735a/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/armchair-ec6834dc6fcf471988769abe0fbd735a?utm_medium=embed&utm_campaign=share-popup&utm_content=ec6834dc6fcf471988769abe0fbd735a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Armchair </a> by <a href="https://sketchfab.com/rickyowings?utm_medium=embed&utm_campaign=share-popup&utm_content=ec6834dc6fcf471988769abe0fbd735a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ricky Owings </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=ec6834dc6fcf471988769abe0fbd735a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`}}></div>

const TankID = `tank`
const TigerTank = <div className="center-elements sec" dangerouslySetInnerHTML={{__html: `<div class="sketchfab-embed-wrapper"> <iframe title="Low Poly Tiger 1" id="${TankID}" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/3abb79fa3a2d4c098e42d2b2c940ec34/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/low-poly-tiger-1-3abb79fa3a2d4c098e42d2b2c940ec34?utm_medium=embed&utm_campaign=share-popup&utm_content=3abb79fa3a2d4c098e42d2b2c940ec34" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Low Poly Tiger 1 </a> by <a href="https://sketchfab.com/rickyowings?utm_medium=embed&utm_campaign=share-popup&utm_content=3abb79fa3a2d4c098e42d2b2c940ec34" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ricky Owings </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3abb79fa3a2d4c098e42d2b2c940ec34" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`}}></div>



const IDArr = [HBotID, AClockID, AChairID, TankID]




function resizeElements(){
    window.addEventListener('resize', ()=>{
        resizeFunction();
    });
    window.addEventListener('deviceorientation', ()=>{
        resizeFunction();
    });
}


function resizeFunction(){
    const maxWidth = window.innerWidth; 
    IDArr.forEach((id)=>{
        const element: HTMLElement = document.getElementById(id) as HTMLIFrameElement;
        if (!element) return;

        const width = (targetWidth < maxWidth) ? targetWidth : maxWidth;            
        const height = targetHeight * width / targetWidth;
        element.style.width = `${width}px`;
        element.style.height = `${height}px`;
    })
}


export default function (){
    resizeElements();
    resizeFunction();

    return <>
        <div className='navbar-spacer'></div>
        <div className='center-elements'>
            <h5>My 3D Models</h5>
            {HoverBot}
            {AlarmClock}
            {ArmChair}
            {TigerTank}
        </div>
    </>   
}
