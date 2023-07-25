import React from "../snowpack/pkg/react.js";
import CDiv from "./centerDiv.js";
function ExpandSection(props) {
  const id = props.title.toLowerCase().replace(/ /g, "");
  const target = "#" + id;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h5", {
    className: "centered selectable ninety-width",
    "data-bs-toggle": "collapse",
    "data-bs-target": target,
    "aria-expanded": "false",
    "aria-controls": id
  }, props.title), /* @__PURE__ */ React.createElement("div", {
    id,
    className: "collapse"
  }, props.children));
}
function MoreAboutMe() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "sec center-elements content-width"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "centered small-text"
  }, "click to expand topics"), /* @__PURE__ */ React.createElement(ExpandSection, {
    title: "Programming"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./images/garrysmod.png",
    alt: "",
    className: "img-width centered"
  }), /* @__PURE__ */ React.createElement("p", null, "When I was in school, I would play a game called ", /* @__PURE__ */ React.createElement("a", {
    href: "https://gmod.facepunch.com/",
    target: "_blank"
  }, "Garry's Mod"), ". There was a modification to the game called ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.wiremod.com/",
    target: "_blank"
  }, "Wiremod"), " which would allow you to essentially program within the game. This was the first thing that really got me into it. They did try to introduce the idea in school with ", /* @__PURE__ */ React.createElement("a", {
    href: "https://scratch.mit.edu/",
    target: "_blank"
  }, "Scratch"), ", but it did not really get me too interested because of how tedious it was to use."), /* @__PURE__ */ React.createElement("h6", {
    className: "underline"
  }, "First Online Course"), /* @__PURE__ */ React.createElement("img", {
    src: "./images/codecademy.png",
    alt: "",
    className: "img-width centered"
  }), /* @__PURE__ */ React.createElement("p", null, "I took an online course called ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.codecademy.com/",
    target: "_blank"
  }, "Codecademy"), ", which taught me the grammer of the Javascript language. Although it was not really that good for actually learning how to employ the language on its own, it was a good steping stone for getting into the programming mindset. The rest of my initial knowledge at the time came through watching tutorials on ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.youtube.com/",
    target: "_blank"
  }, "Youtube"), " and finding things on ", /* @__PURE__ */ React.createElement("a", {
    href: "https://stackoverflow.com/",
    target: "_blank"
  }, "Stack Overflow"), "."), /* @__PURE__ */ React.createElement("h6", {
    className: "underline"
  }, "First Project"), /* @__PURE__ */ React.createElement("p", null, "The first project that I made that I was pretty proud of was ", /* @__PURE__ */ React.createElement("a", {
    href: "#kesslerKnockout"
  }, "Kessler Knockout"), ". I was halfway through the Codecademy course when I made it, so I had to just hack it together with some of the concepts that I understood at the time. While I definetely cringe at the code looking back at it now, it was something that really got me into programming as a whole."), /* @__PURE__ */ React.createElement("h6", {
    className: "underline"
  }, "More Projects"), /* @__PURE__ */ React.createElement("p", null, "After that, I would make projects for the fun of it. I would learn a lot through just trying to make something that I would find cool and interesting. Because I am an avid gamer, a lot of those things were games! "), /* @__PURE__ */ React.createElement("h6", {
    className: "underline"
  }, "Increasing My Efficieny..."), /* @__PURE__ */ React.createElement("img", {
    src: "./images/vscodevim.png",
    alt: "",
    className: "img-width centered"
  }), /* @__PURE__ */ React.createElement("p", null, "When I was programming things, I was getting kind of annoyed. It felt very inconvenient to take my hand and slightly move it to the bottom right hand corner of my keyboard. I then randomly found an extension on ", /* @__PURE__ */ React.createElement("a", {
    href: "https://code.visualstudio.com/",
    target: "_blank"
  }, "VSCode"), " called ", /* @__PURE__ */ React.createElement("a", {
    href: "https://marketplace.visualstudio.com/items?itemName=vscodevim.vim",
    target: "_blank"
  }, "VIM"), ". It took time to get used to the keybinds for it, but it was definetely worth it! I will always look for a way to use the VIM keybinds in any sofware I use for now on. At the time, I did not know that it was a full blown text editor. I have not moved over to it entirely just yet, but I have dabbled quite a bit with it already."), /* @__PURE__ */ React.createElement("h6", {
    className: "underline"
  }, "My First Certification"), /* @__PURE__ */ React.createElement("img", {
    src: "./images/certification.png",
    alt: "",
    className: "img-width centered"
  }), /* @__PURE__ */ React.createElement("p", null, "I wanted to learn more about programming while getting some credentials in the process. I decided to take the Harvard ", /* @__PURE__ */ React.createElement("a", {
    href: "https://cs50.harvard.edu/x/2023/",
    target: "_blank"
  }, "CS50x"), " course in order to achieve that goal. It was a really fun course and I learned a lot through doing it."), /* @__PURE__ */ React.createElement("h6", {
    className: "centered"
  }, "Using NVIM"), /* @__PURE__ */ React.createElement("img", {
    src: "./images/nvim_terminal.png",
    alt: "",
    className: "img-width centered"
  }), /* @__PURE__ */ React.createElement("p", null, "While I was taking the course, I thought it would be fun to use ", /* @__PURE__ */ React.createElement("a", {
    href: "https://neovim.io/",
    target: "_blank"
  }, "NVIM"), " to take my notes, so I did. In doing so, I learned a bit about configuring my VIMRC. One thing that I had configured was for making it so that if a line goes off of the screen, insead of wrapping half way through the word, it would do word wrapping and also preserve the indentation. I am still a novice at using NVIM, but I will hopefully get better as time goes on and I might be able to use it as my main IDE at some point."), /* @__PURE__ */ React.createElement("h6", {
    className: "centered"
  }, "Coding in C"), /* @__PURE__ */ React.createElement("p", null, "In the first five weeks of the course, they used the C language. Because we were programming in C, they covered managing your ram usage for an application via using malloc, free, and realloc a bit. They also introduced pointers, which was a completely foriegn concept coming from Javascript. One thing that I found interesting was how similar the syntax was for Javascript when comparing it to C."), /* @__PURE__ */ React.createElement("h6", {
    className: "centered"
  }, "Everything Else"), /* @__PURE__ */ React.createElement("p", null, "After C, they got into Python, SQL, and Web Code (HTML, CSS, JAVASCRIPT, and FLASK). Since I had quite a bit of experience programing at this point, it was pretty easy to convert my knowledge to a different language such as Python. SQL was completely different, as it's use case is for databases. I would say that it is the language that I have the least experience with, but I do understand it based off of what we did with it in the course. The Web Code portion was basically review for what I already knew. The only main curveball was FLASK, which was pretty fun once I figured it out."), /* @__PURE__ */ React.createElement("h6", {
    className: "centered"
  }, "Final Project"), /* @__PURE__ */ React.createElement("p", null, "The final project for the course that I made was ", /* @__PURE__ */ React.createElement("a", {
    href: "#conveyor"
  }, "Conveyor"), ". I had the idea for it while I was making the course, so I decided to make it as my final project. It is not entirely original, as it is inspired by the likes of Factorio and Minecraft, but I solved a lot of problems while I was making it. It is probably the most complicated thing that I have made to date, with around 1,200 lines of code! While I was making it, I did not want to get stuck up on just trying to figure out how to layout the game, so the code is a little bit messy. The end product, however, I am really happy with. One thing that I did differently with this game was the way that it was made. Most of my games up to this point were made using a canvas element. This one actually just uses different HTML elements for the things in game. One upside to doing it this way is that it enables you to use CSS animations for some of the things in the game.")), /* @__PURE__ */ React.createElement(ExpandSection, {
    title: "3D Modeling"
  }, /* @__PURE__ */ React.createElement("h6", {
    className: "underline"
  }, "Introduction"), /* @__PURE__ */ React.createElement("p", null, "On my free time, I got into this 3d Modeling software called ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.blender.org/",
    target: "_blank"
  }, "Blender"), ". With it, you can create basically anything you can imagine. I got sucked into these tutorials on Youtube talking about what you can do with the software. I highly recommend getting into it. Since it is free, the barrier for entry is just to download it."), /* @__PURE__ */ React.createElement("h6", {
    className: "underline"
  }, "Node System"), /* @__PURE__ */ React.createElement("img", {
    src: "./images/blender_nodes_example.png",
    alt: "",
    className: "img-width centered"
  }), /* @__PURE__ */ React.createElement("p", null, "One thing that I really like about Blender is the node system. With it, you can basically connect these different blocks together that have different logic in order to achieve, for example, a texture for an object. The nodes are basically just a graphical programming language in a sense. It is really fun to use once you can wrap your head around it."), /* @__PURE__ */ React.createElement("h6", {
    className: "underline"
  }, "Addons"), /* @__PURE__ */ React.createElement("img", {
    src: "./images/myface_in_blender.png",
    alt: "",
    className: "img-width centered"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "small-text centered"
  }, "I look so sad lol"), /* @__PURE__ */ React.createElement("p", null, "There are different addons that you can get for Blender. A while back, I got an addon for Blender called ", /* @__PURE__ */ React.createElement("a", {
    href: "https://keentools.io/download/facebuilder-for-blender",
    target: "_blank"
  }, "FaceBuilder"), ". With it, you can take a bunch of picture revolving around your face, and morph this template face to fit your face. This is just one of the thousands of addons that people have made for Blender. You can find a lot of them on the ", /* @__PURE__ */ React.createElement("a", {
    href: "https://blendermarket.com/",
    target: "_blank"
  }, "Blender Market"))));
}
function ContactInfo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-spacer"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sec center-elements content-width"
  }, /* @__PURE__ */ React.createElement("h5", {
    id: "contactinformation",
    className: "centered"
  }, "Contact Information"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: "./images/email.png",
    alt: "",
    width: "20",
    className: "color-icon"
  }), " rickyowings@gmail.com"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: "./images/github.png",
    alt: "",
    width: "20",
    className: "color-icon"
  }), " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/RickyOwings",
    target: "_blank"
  }, "https://github.com/RickyOwings")), /* @__PURE__ */ React.createElement("p", {
    className: "small-text"
  }, "Icons are from ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.flaticon.com/authors/freepik",
    target: "_blank"
  }, "freepik"))), /* @__PURE__ */ React.createElement("div", {
    className: "bottom-spacer"
  }));
}
export default function() {
  return /* @__PURE__ */ React.createElement(CDiv, null, /* @__PURE__ */ React.createElement("h4", {
    id: "aboutme"
  }, "About Me"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Calm and nice demeanor"), /* @__PURE__ */ React.createElement("li", null, "Love to learn new things"), /* @__PURE__ */ React.createElement("li", null, "Self taught programmer (HTML, CSS, JAVASCRIPT, C, PYTHON, SQL)"), /* @__PURE__ */ React.createElement("li", null, "Music"), /* @__PURE__ */ React.createElement("li", null, "3D Modeling"), /* @__PURE__ */ React.createElement("li", null, "Gaming")), /* @__PURE__ */ React.createElement(MoreAboutMe, null), /* @__PURE__ */ React.createElement(ContactInfo, null));
}
