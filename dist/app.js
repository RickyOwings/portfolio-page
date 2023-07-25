import React, {useState} from "../snowpack/pkg/react.js";
import Homepage from "./homepage.js";
import Music, {VolumeSlider} from "./music.js";
import Navbar, {NavbarHrefLocal, SiteChange} from "./navbar.js";
let page = "homepage";
export default function() {
  const links = {
    homepage: [
      /* @__PURE__ */ React.createElement(NavbarHrefLocal, {
        key: "aboutme",
        href: "#aboutme"
      }, "About Me"),
      /* @__PURE__ */ React.createElement(SiteChange, {
        callback: toMusic,
        key: "tomusic"
      }, "To My Music")
    ],
    music: [
      /* @__PURE__ */ React.createElement(NavbarHrefLocal, {
        key: "about",
        href: "#about"
      }, "About"),
      /* @__PURE__ */ React.createElement(SiteChange, {
        callback: toHomepage,
        key: "tohomepage"
      }, "To Homepage"),
      /* @__PURE__ */ React.createElement(VolumeSlider, null)
    ]
  };
  var [currentLinks, setLinks] = useState(links.homepage);
  var [content, setContent] = useState(/* @__PURE__ */ React.createElement(Homepage, null));
  function toMusic() {
    setContent(/* @__PURE__ */ React.createElement(Music, null));
    setLinks(links.music);
  }
  function toHomepage() {
    setContent(/* @__PURE__ */ React.createElement(Homepage, null));
    setLinks(links.homepage);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, {
    links: currentLinks
  }), content);
}
