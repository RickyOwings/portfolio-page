import React from "../snowpack/pkg/react.js";
import Cookie from "../snowpack/pkg/js-cookie.js";
const themes = {
  light: {
    "--text-primary-color": "#000000",
    "--text-secondary-color": "#212121",
    "--highlight-text-color": "#0000ff",
    "--primary-color": "#ffffff",
    "--secondary-color": "#eeeeee",
    "--selected-color": "#c8fbff",
    "--unselected-color": "#dddddd",
    "--icon-invert": "0",
    "--shadow-color": "#0004",
    "--shadow-hilight-color": "#c8fbff",
    "--shadow-size": "4px"
  },
  dark: {
    "--text-primary-color": "#ffffff",
    "--text-secondary-color": "#eeeeee",
    "--highlight-text-color": "#ffaa00",
    "--primary-color": "#000000",
    "--secondary-color": "#111111",
    "--selected-color": "#99630b",
    "--unselected-color": "#222222",
    "--icon-invert": "1",
    "--shadow-color": "#44a3",
    "--shadow-hilight-color": "#fa0a",
    "--shadow-size": "20px"
  },
  pumpkin: {
    "--text-primary-color": "#000000",
    "--text-secondary-color": "#212121",
    "--highlight-text-color": "#00686a",
    "--primary-color": "#eedbba",
    "--secondary-color": "#eabd83",
    "--selected-color": "#fff99d",
    "--unselected-color": "#d1a478",
    "--icon-invert": "0",
    "--shadow-color": "#0004",
    "--shadow-hilight-color": "#fff99daa",
    "--shadow-size": "4px"
  },
  aqua: {
    "--text-primary-color": "#000000",
    "--text-secondary-color": "#001a12",
    "--highlight-text-color": "#f9ff00",
    "--primary-color": "#69faa8",
    "--secondary-color": "#4fa184",
    "--selected-color": "#f9ff00",
    "--unselected-color": "#a3ffda",
    "--icon-invert": "0",
    "--shadow-color": "#0004",
    "--shadow-hilight-color": "#f9ff00aa",
    "--shadow-size": "4px"
  }
};
export default function() {
  const getTheme = Cookie.get("theme");
  let hasTheme = false;
  Object.keys(themes).forEach((theme2) => {
    if (theme2 == getTheme)
      hasTheme = true;
  });
  let theme = hasTheme ? getTheme : Object.keys(themes)[0];
  const onClickFN = () => {
    const themesArr = Object.keys(themes);
    const index = themesArr.indexOf(theme);
    const newIndex = index >= themesArr.length - 1 ? 0 : index + 1;
    theme = themesArr[newIndex];
    applyTheme();
  };
  const applyTheme = () => {
    const themeObject = themes[theme];
    Cookie.set("theme", theme);
    for (const key in themeObject) {
      document.body.style.setProperty(key, themeObject[key]);
    }
  };
  applyTheme();
  return /* @__PURE__ */ React.createElement("a", {
    className: "tc-pri volume-controller selectable",
    onClick: onClickFN
  }, "Change Theme");
}
