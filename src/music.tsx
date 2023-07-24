import React, {useState} from 'react';
import { createRoot } from 'react-dom/client'
interface SongProps {
    url: string;
}

const volumeElementID = "volume-controller";
const initialVolume = 0.1;

function Song(props: SongProps){
    const title = props.url
        .replace(/\.mp3/g, "")
        .replace(/\.\/music\//, "");

    const id = title.replace(/ /g, "");
    const sliderId = id + "slider";

    var [playstate, setPlaystate] = useState(false);
    var [btnClass, setBtnClass] = useState("audio-playbutton");

    function btnClick(): void{
        const audioElement = document.getElementById(id) as HTMLAudioElement;
        const volumeElement = document.getElementById(volumeElementID) as HTMLInputElement;
        if (!audioElement) return;
        if (!volumeElement) return;
        audioElement.volume = parseFloat(volumeElement.value);
        if (!playstate) {
            audioElement.play();
            setBtnClass("audio-playbutton stop-button");
        } else {
            audioElement.pause();
            setBtnClass("audio-playbutton")
        }
        setPlaystate(!playstate);
    }

    var [timeDisp, setTimeDisp] = useState(0);
    var [durationDisp, setDurDisp] = useState(NaN);

    setInterval(()=>{
        const audioElement = document.getElementById(id) as HTMLAudioElement;
        const sliderElement = document.getElementById(sliderId) as HTMLInputElement;
        const volumeElement = document.getElementById(volumeElementID) as HTMLInputElement;
        if (!audioElement) return;
        if (!sliderElement) return;
        if (!volumeElement) return;
        setTimeDisp(
            Math.round(audioElement.currentTime)
        );
        setDurDisp(
            Math.round(audioElement.duration)
        )
        audioElement.volume = parseFloat(volumeElement.value);
        const time = audioElement.currentTime / audioElement.duration;
        if (time >= 1) {
            setBtnClass("audio-playbutton");
            audioElement.pause();
            audioElement.currentTime = 0;
            setPlaystate(!playstate);
        }
        sliderElement.value = `${time}`;
    }, 100);

    function onUserInput(){
        const sliderElement = document.getElementById(sliderId) as HTMLInputElement;
        const audioElement = document.getElementById(id) as HTMLAudioElement;
        if (!audioElement) return;
        if (!sliderElement) return;
        const sliderVal = parseFloat(sliderElement.value);
        const targetTime = sliderVal * audioElement.duration;
        audioElement.currentTime = targetTime;
    }

    return <div className="audio-section center-elements">
        <p>{title}</p>
        <audio id={id} src={props.url}></audio>
        <div className="audio-controls">
            <div className={btnClass} onClick={btnClick}></div>
            <div className="control-spacer"></div>
            <input 
                id={sliderId}
                className="audio-slider" 
                type="range" 
                min={0}
                max={1}
                step={0.01}
                placeholder="0"
                onInput={onUserInput}
            ></input>
            <div className="control-spacer"></div>
            {timeDisp}s | {durationDisp}s
        </div>
    </div>
}


function MySongs(){
    const req = new XMLHttpRequest();
    req.open("GET", "./music/songs.json", false);
    req.send(null);
    if (req.status !== 200) return <>Could not get songs...</>
    const json: string[] = JSON.parse(req.responseText);
    const songs: JSX.Element[] = [];
    json.forEach((songName)=>{
        if (songName == "songs.json") return;
        songs.push(<Song url={`./music/${songName}`} key={songName}></Song>);
    });

    setTimeout(()=>{
        const volumeElement = document.getElementById(volumeElementID) as HTMLInputElement; 
        if (volumeElement) volumeElement.value=`${initialVolume}`;
    }, 100);
    
    return <div className="audio-container">
        {...songs}
    </div>
}


function AboutMusic(){
    return <div className="fill-width center-elements">
        <h3 id="about">About</h3>
        <div className="content-width sec">
        <h5 className="underline">Background</h5>
        <p>
            When I was in third grade, I took private lessons on how to play the trumpet. When I went into middle school, I joined the band className. playing trumpet. I did some competitions and got to go to the OSU honor band in middle school while also joining the jazz band. When I was in 8th grade, I went into the high school marching band. I did that for a total of five years and it was really fun. I still enjoy playing trumpet to this day
        </p>
        <h5 className="underline">First Software</h5>
        <img src="./images/musescore.png" alt=""  className="img-width centered"></img>
        <p>
        I have been making music for a very long time. The first piece of software that I used was called <a href="https://musescore.org/en" target="_blank">Musescore</a>. The software was a music notation software, so it was made for making sheet music for people to play. Instead of using it for that, I would use it to make cool sounding songs because it was fun.
        </p>
        <h5 className="underline">Second Software</h5>
        <img src="./images/famitracker.png" alt=""  className="img-width centered"></img>
        <p>
        After Musescore, I got into the other piece of software called <a href="http://famitracker.com/" target="_blank">Famitracker</a>. Famitracker is a software that emulates old game consoles sound cards. When you make music with this software, there are only so many tracks that you can have layered at the same time. This means that you have to work around that limitation by using different tricks like arpeggios to emulate having more instuments. The result can often lead to songs that sound pretty cool based on the limitations that you imposed on yourself by using the software.
        </p>
        <h5 className="underline">Third Software</h5>
        <img src="./images/lmms.png" alt=""  className="img-width centered"></img>
        <p>
        After that, I then got into another software called <a href="https://lmms.io/lsp/" target="_blank">LMMS</a>. It is not really the best software out there, as things like FL Studio are way better to make music with, but LMMS is free and is pretty powerful once you learn the ropes of how it works. One thing that I really like about it is the automation tracks. You can basically control any dial that appears in the software automatically throughout the sound. Like, for example, you can automate the tempo to go gradually lower in a different part of the song to emulate a ritardando.
        </p>
        </div>

    </div>
}


export function VolumeSlider(){
    return <div className="tc-pri volume-controller">
        <div>Volume</div>
        <div className="control-spacer"></div>
        <form>        
            <input 
                type="range" 
                id="volume-controller" 
                min="0" 
                max="1" 
                step="0.01"
            ></input>
        </form>

    </div>
}


export default function (){
    return <>
        <div className="navbar-spacer"></div>
        <div className="fill-width center-elements">
            <h3 id="mymusic">My Music</h3>
        </div>
        <MySongs></MySongs>
        <div className="navbar-spacer"></div>
        <AboutMusic></AboutMusic>
    </>
}

