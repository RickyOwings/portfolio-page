async function main(){
    await pageLoaded();
    const themeChanger = document.getElementById("change-theme");
    if (!themeChanger) return;
    const passesTheme = document.getElementsByClassName("passesTheme");
    if (!passesTheme) return;
    const themes = {
        "light":{
            "--text-primary-color": "#000000",
            "--text-secondary-color": "#212121",
            "--highlight-text-color": "#0000ff",
            "--primary-color": "#ffffff",
            "--secondary-color": "#eeeeee",
            "--selected-color": "#c8fbff",
            "--unselected-color": "#dddddd",
            "--icon-invert": "0",
        },
        "dark":{
            "--text-primary-color": "#ffffff",
            "--text-secondary-color": "#eeeeee",
            "--highlight-text-color": "#ffaa00",
            "--primary-color": "#000000",
            "--secondary-color": "#111111",
            "--selected-color": "#99630b",
            "--unselected-color": "#222222",
            "--icon-invert": "1",
        },
        "pumpkin":{
            "--text-primary-color": "#000000",
            "--text-secondary-color": "#212121",
            "--highlight-text-color": "#00686a",
            "--primary-color": "#eedbba",
            "--secondary-color": "#eabd83",
            "--selected-color": "#fff99d",
            "--unselected-color": "#d1a478",
            "--icon-invert": "0",
        },
    }
    let passedTheme = getTheme();
    let theme: string = (Object.keys(themes).includes(passedTheme)) ? passedTheme : "light";
    let root = document.querySelector(":root");
    if (!root) return;
    // When the user changes the theme
    function setTheme(){
        let themeObject = themes[theme];
        for (let property in themeObject) {
            if (root) root["style"].setProperty(property, themeObject[property])
        }
        for(let i in passesTheme){
            if (!passesTheme[i]["href"]) continue;
            passesTheme[i]["href"] = changeHref(passesTheme[i]["href"], theme);
        }
    } 
    setTheme();
    function changeTheme(){
        let themeKeys = Object.keys(themes);
        let index = themeKeys.indexOf(theme);
        index++;
        if (index >= themeKeys.length) index = 0;
        let newTheme = themeKeys[index];
        theme = newTheme;
        let themeObject = themes[newTheme];
        for (let property in themeObject) {
            if (root) root["style"].setProperty(property, themeObject[property]);
        }
        setTheme(); 
    }
    themeChanger.addEventListener('click',changeTheme);
};

function getTheme(): string{
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let string: string | null= (params.has("theme")) ? params.get("theme") : "light";
    return (string) ? string : "light";
}

function changeHref(url, newTheme){
    console.log(url);
    let index = url.indexOf("?");
    let newUrl = `${url.substring(0,index)}?theme=${newTheme}`;
    return newUrl;
}

const pageLoaded = (): Promise<void> => new Promise((resolve)=>{
    document.addEventListener('DOMContentLoaded', ()=>{resolve()});
})
main();
