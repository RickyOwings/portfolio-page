const volumeController = document.getElementById('volume-controller')
const musicContainer = document.createElement('div');
musicContainer.className = "audio-container";
musicContainer.style.opacity = "0";
setTimeout(() => {
    musicContainer.style.opacity = "1";
}, 1000)
document.body.appendChild(musicContainer);

const filenames = [
    "A Bit Crushed.mp3",
    "A Run Through Twilight.mp3",
    "Angry March.mp3",
    "Another Song.mp3",
    "Bit Bop.mp3",
    "Crossroads.mp3",
    "Encampment.mp3",
    "Gutteral March.mp3",
    "Hell Train.mp3",
    "Hide from the Hellstorm.mp3",
    "Long Odyssey.mp3",
    "Lost in Limbo.mp3",
    "Lost Program.mp3",
    "Midnight Haze.mp3",
    "Mystical.mp3",
    "Never-ending Lul.mp3",
    "Progression.mp3",
    "Rollin.mp3",
    "Sawtooth Organ.mp3",
    "Some Jazzy Trumpet Song.mp3",
    "Square March.mp3",
    "Synthy Swing.mp3",
    "Tear.mp3",
    "The Steadfast Strum.mp3",
    "The Volley.mp3",
    "Tracks on Trees.mp3",
    "Trek.mp3",
    "Trench Foot.mp3",
    "Yoob's Belly Outside.mp3"
];

for (let i in filenames) {
    createAudioElement(filenames[i], musicContainer);
}


function createAudioElement(filename, toAppend) {
    let url = `./music/${filename}`;
    let audio = document.createElement("audio");
    let div = document.createElement("div");
    let label = document.createElement("p");
    label.innerHTML = filename.replace(".mp3", "")
    div.className = "audio-section center-elements"
    audio.src = url;
    div.appendChild(label);
    div.appendChild(audio);
    div.appendChild(createControls(audio))
    toAppend.appendChild(div);
}

function createControls(audio: HTMLAudioElement) {
    let spacer1: HTMLDivElement = document.createElement('div');
    spacer1.className = "control-spacer";

    let spacer2: HTMLDivElement = document.createElement('div');
    spacer2.className = "control-spacer";

    let div = document.createElement("div");
    div.className = "audio-controls";
    let playbutton = document.createElement("div");
    playbutton.className = "audio-playbutton";
    let playstate: string = "paused";

    playbutton.addEventListener('click', () => {
        playstate = (playstate == "paused") ? "playing" : "paused";
        if (playstate == "playing") {
            audio.play()
            playbutton.className = "audio-playbutton stop-button"
        } else {
            playbutton.className = "audio-playbutton"
            audio.pause()
        }
    });
    let loaded: boolean = false;
    playbutton.addEventListener('mouseover', () => {
        if (!loaded) {
        }
    });
    // slider
    let slider = document.createElement("input");
    slider.className = "audio-slider";
    slider.type = "range";
    slider.min = "0";
    slider.max = "1";
    slider.value = "0";
    slider.step = "0.01";
    slider.placeholder = "0";
    slider.addEventListener('input', () => {
        let time = slider.value * audio.duration;
        audio.currentTime = time;
    });
    let timer = document.createElement("div");


    setInterval(() => {
        slider.value = audio.currentTime / audio.duration;
        timer.innerHTML = `${Math.floor(audio.currentTime)}s | ${Math.floor(audio.duration)}s`;
        if (audio.currentTime >= audio.duration) {
            playbutton.className = "audio-playbutton"
        }
    }, 500);

    audio.volume = volumeController.value;
    volumeController.addEventListener('input', () => {
        audio.volume = volumeController.value;
    });

    div.appendChild(playbutton);
    div.appendChild(spacer1);
    div.appendChild(slider);
    div.appendChild(spacer2);
    div.appendChild(timer);
    return div;
}
