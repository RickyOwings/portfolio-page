import React from "../snowpack/pkg/react.js";
import ThemeChanger from "./themeChanger.js";
export function NavbarHrefLocal(props) {
  return /* @__PURE__ */ React.createElement("a", {
    className: "tc-pri selectable passesTheme",
    role: "button",
    href: props.href
  }, props.children);
}
export function SiteChange(props) {
  return /* @__PURE__ */ React.createElement("a", {
    className: "tc-pri selectable passesTheme",
    onClick: props.callback,
    role: "button"
  }, props.children);
}
export default function(props) {
  let oldScroll = window.scrollY;
  let style = {
    opacity: "1"
  };
  const id = "navbar";
  window.onscroll = () => {
    const newScroll = window.scrollY;
    const deltaScroll = newScroll - oldScroll;
    if (deltaScroll > 0)
      hideNavbars();
    else
      showNavbars();
    oldScroll = newScroll;
  };
  const hideNavbars = () => {
    document.getElementById(id).style.setProperty("opacity", "0");
  };
  const showNavbars = () => {
    document.getElementById(id).style.setProperty("opacity", "1");
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar navbar-expand-lg",
    id,
    style
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid"
  }, /* @__PURE__ */ React.createElement("video", {
    muted: true,
    autoPlay: true,
    loop: true,
    width: "32px",
    poster: "./images/my_face.png"
  }, /* @__PURE__ */ React.createElement("source", {
    src: "./images/my_face.webm"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "navbar-brand"
  }, " ", "Ricky's Portfolio"), /* @__PURE__ */ React.createElement("button", {
    className: "navbar-toggler selectable",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarNavAltMarkup",
    "aria-controls": "navbarNavAltMarkup",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "navbar-toggler-icon color-icon"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNavAltMarkup"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-nav"
  }, props.links, /* @__PURE__ */ React.createElement(ThemeChanger, null))))), /* @__PURE__ */ React.createElement("div", {
    className: "navbar-spacer"
  }));
}
