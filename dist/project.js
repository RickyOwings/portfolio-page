import React from "../snowpack/pkg/react.js";
export default function(props) {
  const linkText = props.isRepo ? "Repository" : "Link (Made for Desktop!)";
  const id = props.title.toLowerCase().replace(/ /g, "");
  const target = "#" + id;
  const display = props?.isVideo && props?.poster ? /* @__PURE__ */ React.createElement("video", {
    preload: "yes",
    muted: true,
    width: "32px",
    className: "img-width centered",
    autoPlay: true,
    poster: props.poster
  }, /* @__PURE__ */ React.createElement("source", {
    src: props.imgSrc
  })) : /* @__PURE__ */ React.createElement("img", {
    src: props.imgSrc,
    alt: "",
    className: "img-width centered"
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "center-elements sec content-width"
  }, /* @__PURE__ */ React.createElement("h6", null, props.title), display, /* @__PURE__ */ React.createElement("div", {
    className: "justify-elements"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "tc-pri selectable",
    "data-bs-toggle": "collapse",
    "data-bs-target": target,
    "aria-expanded": "false",
    "aria-controls": "aboutMissile",
    href: target
  }, "About"), /* @__PURE__ */ React.createElement("a", {
    className: "tc-pri selectable",
    href: props.link,
    target: "_blank"
  }, linkText)), /* @__PURE__ */ React.createElement("p", {
    className: "collapse centered about",
    id
  }, props.children)));
}
