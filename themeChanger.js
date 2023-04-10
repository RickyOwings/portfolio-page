async function main(){
    await window.onpageload();
    const themeChanger = document.getElementById("change-theme");
    const passesTheme = document.getElementsByClassName("passesTheme");
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
            "--highlight-text-color": "#00aa00",
            "--primary-color": "#eedbba",
            "--secondary-color": "#eabd83",
            "--selected-color": "#ff3835",
            "--unselected-color": "#d1a478",
            "--icon-invert": "0",
        },
    }
    let passedTheme = getTheme();
    let theme = (Object.keys(themes).includes(passedTheme)) ? passedTheme : "light";
    let root = document.querySelector(":root");
    // When the user changes the theme
    function setTheme(){
        let themeObject = themes[theme];
        for (let property in themeObject) {
            root.style.setProperty(property, themeObject[property]);
        }
        for(let i in passesTheme){
            if (!passesTheme[i].href) continue;
            passesTheme[i].href = changeHref(passesTheme[i].href, theme);
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
            root.style.setProperty(property, themeObject[property]);
        }
        setTheme(); 
    }
    themeChanger.addEventListener('click',changeTheme);
};
main();


function getTheme(){
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    if (params.has("theme")) return params.get("theme");
    return "light";
}

function changeHref(url, newTheme){
    console.log(url);
    let index = url.indexOf("?");
    let newUrl = `${url.substring(0,index)}?theme=${newTheme}`;
    return newUrl;
}