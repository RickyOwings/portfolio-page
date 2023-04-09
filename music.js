const musicContainer = document.createElement('div');
musicContainer.className = "projects-container";
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


function createAudioElement(filename, toAppend){
    let url = `./music/${filename}`;
    let audio = document.createElement("audio");
    let div = document.createElement("div");
    let label = document.createElement("p");
    label.innerHTML = filename.replace(".mp3", "")
    div.className = "sec center-elements content-width"
    audio.src = url;
    audio.controls = true;
    div.appendChild(label);
    div.appendChild(audio);
    toAppend.appendChild(div);
}