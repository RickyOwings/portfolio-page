import React, {useState} from "../_snowpack/pkg/react.js";
const volumeElementID = "volume-controller";
const initialVolume = 0.1;
function Song(props) {
  const title = props.url.replace(/\.mp3/g, "").replace(/\.\/music\//, "");
  const id = title.replace(/ /g, "");
  const sliderId = id + "slider";
  var [playstate, setPlaystate] = useState(false);
  var [btnClass, setBtnClass] = useState("audio-playbutton");
  function btnClick() {
    const audioElement = document.getElementById(id);
    const volumeElement = document.getElementById(volumeElementID);
    if (!audioElement)
      return;
    if (!volumeElement)
      return;
    audioElement.volume = parseFloat(volumeElement.value);
    if (!playstate) {
      audioElement.play();
      setBtnClass("audio-playbutton stop-button");
    } else {
      audioElement.pause();
      setBtnClass("audio-playbutton");
    }
    setPlaystate(!playstate);
  }
  var [timeDisp, setTimeDisp] = useState(0);
  var [durationDisp, setDurDisp] = useState(NaN);
  setInterval(() => {
    const audioElement = document.getElementById(id);
    const sliderElement = document.getElementById(sliderId);
    const volumeElement = document.getElementById(volumeElementID);
    if (!audioElement)
      return;
    if (!sliderElement)
      return;
    if (!volumeElement)
      return;
    setTimeDisp(Math.round(audioElement.currentTime));
    setDurDisp(Math.round(audioElement.duration));
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
  function onUserInput() {
    const sliderElement = document.getElementById(sliderId);
    const audioElement = document.getElementById(id);
    if (!audioElement)
      return;
    if (!sliderElement)
      return;
    const sliderVal = parseFloat(sliderElement.value);
    const targetTime = sliderVal * audioElement.duration;
    audioElement.currentTime = targetTime;
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "audio-section center-elements"
  }, /* @__PURE__ */ React.createElement("p", null, title), /* @__PURE__ */ React.createElement("audio", {
    id,
    src: props.url
  }), /* @__PURE__ */ React.createElement("div", {
    className: "audio-controls"
  }, /* @__PURE__ */ React.createElement("div", {
    className: btnClass,
    onClick: btnClick
  }), /* @__PURE__ */ React.createElement("div", {
    className: "control-spacer"
  }), /* @__PURE__ */ React.createElement("input", {
    id: sliderId,
    className: "audio-slider",
    type: "range",
    min: 0,
    max: 1,
    step: 0.01,
    placeholder: "0",
    onInput: onUserInput
  }), /* @__PURE__ */ React.createElement("div", {
    className: "control-spacer"
  }), timeDisp, "s | ", durationDisp, "s"));
}
function MySongs() {
  const req = new XMLHttpRequest();
  req.open("GET", "./music/songs.json", false);
  req.send(null);
  if (req.status !== 200)
    return /* @__PURE__ */ React.createElement(React.Fragment, null, "Could not get songs...");
  const json = JSON.parse(req.responseText);
  const songs = [];
  json.forEach((songName) => {
    if (songName == "songs.json")
      return;
    songs.push(/* @__PURE__ */ React.createElement(Song, {
      url: `./music/${songName}`,
      key: songName
    }));
  });
  setTimeout(() => {
    const volumeElement = document.getElementById(volumeElementID);
    if (volumeElement)
      volumeElement.value = `${initialVolume}`;
  }, 100);
  return /* @__PURE__ */ React.createElement("div", {
    className: "audio-container"
  }, songs);
}
function AboutMusic() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "fill-width center-elements"
  }, /* @__PURE__ */ React.createElement("h3", {
    id: "about"
  }, "About"), /* @__PURE__ */ React.createElement("div", {
    className: "content-width sec"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "underline"
  }, "Background"), /* @__PURE__ */ React.createElement("p", null, "When I was in third grade, I took private lessons on how to play the trumpet. When I went into middle school, I joined the band className. playing trumpet. I did some competitions and got to go to the OSU honor band in middle school while also joining the jazz band. When I was in 8th grade, I went into the high school marching band. I did that for a total of five years and it was really fun. I still enjoy playing trumpet to this day"), /* @__PURE__ */ React.createElement("h5", {
    className: "underline"
  }, "First Software"), /* @__PURE__ */ React.createElement("img", {
    src: "./images/musescore.png",
    alt: "",
    className: "img-width centered"
  }), /* @__PURE__ */ React.createElement("p", null, "I have been making music for a very long time. The first piece of software that I used was called ", /* @__PURE__ */ React.createElement("a", {
    href: "https://musescore.org/en",
    target: "_blank"
  }, "Musescore"), ". The software was a music notation software, so it was made for making sheet music for people to play. Instead of using it for that, I would use it to make cool sounding songs because it was fun."), /* @__PURE__ */ React.createElement("h5", {
    className: "underline"
  }, "Second Software"), /* @__PURE__ */ React.createElement("img", {
    src: "./images/famitracker.png",
    alt: "",
    className: "img-width centered"
  }), /* @__PURE__ */ React.createElement("p", null, "After Musescore, I got into the other piece of software called ", /* @__PURE__ */ React.createElement("a", {
    href: "http://famitracker.com/",
    target: "_blank"
  }, "Famitracker"), ". Famitracker is a software that emulates old game consoles sound cards. When you make music with this software, there are only so many tracks that you can have layered at the same time. This means that you have to work around that limitation by using different tricks like arpeggios to emulate having more instuments. The result can often lead to songs that sound pretty cool based on the limitations that you imposed on yourself by using the software."), /* @__PURE__ */ React.createElement("h5", {
    className: "underline"
  }, "Third Software"), /* @__PURE__ */ React.createElement("img", {
    src: "./images/lmms.png",
    alt: "",
    className: "img-width centered"
  }), /* @__PURE__ */ React.createElement("p", null, "After that, I then got into another software called ", /* @__PURE__ */ React.createElement("a", {
    href: "https://lmms.io/lsp/",
    target: "_blank"
  }, "LMMS"), ". It is not really the best software out there, as things like FL Studio are way better to make music with, but LMMS is free and is pretty powerful once you learn the ropes of how it works. One thing that I really like about it is the automation tracks. You can basically control any dial that appears in the software automatically throughout the sound. Like, for example, you can automate the tempo to go gradually lower in a different part of the song to emulate a ritardando.")));
}
export function VolumeSlider() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "tc-pri volume-controller"
  }, /* @__PURE__ */ React.createElement("div", null, "Volume"), /* @__PURE__ */ React.createElement("div", {
    className: "control-spacer"
  }), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("input", {
    type: "range",
    id: "volume-controller",
    min: "0",
    max: "1",
    step: "0.01"
  })));
}
export default function() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-spacer"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "fill-width center-elements"
  }, /* @__PURE__ */ React.createElement("h3", {
    id: "mymusic"
  }, "My Music")), /* @__PURE__ */ React.createElement(MySongs, null), /* @__PURE__ */ React.createElement("div", {
    className: "navbar-spacer"
  }), /* @__PURE__ */ React.createElement(AboutMusic, null));
}
