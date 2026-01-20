document.querySelectorAll(".toggleBtn").forEach((/** @type {HTMLElement} */elem) => {
    const targetID = elem.getAttribute("target");
    if (targetID === null) return;
    const target = document.getElementById(targetID);
    if (target === null) return;
    elem.addEventListener('click', ()=>{
        if (target.hasAttribute("shown")) {
            target.removeAttribute("shown");
        } else {
            target.setAttribute("shown", "shown");
        }
    });
});


const main = document.querySelector("main");

const url = new URL(document.location.href);

(() => {
    const target = url.searchParams.get("target");
    if (!target) return;
    {
        let exists = false;
        for(const child of main.children) {
            if(child.id === target) {
                exists = true;
                break;
            } 
        }
        if (!exists) return;
    }


    for(const child of main.children) {
        if(child.id === target) {
            child.setAttribute("shown", "shown");
        } else {
            child.removeAttribute("shown");
        }
    }
})();

function setTarget(id) {
    url.searchParams.delete("target");
    url.searchParams.set("target", id);
    window.history.replaceState(null, null, `?${url.searchParams.toString()}`);
}

document.querySelectorAll(".navBtn").forEach((/** @type {HTMLElement}*/elem) => {
    const targetID = elem.getAttribute("target");
    console.log(targetID);
    if (targetID === null) return;
    const target = document.getElementById(targetID);
    if (target === null) return; 
    elem.addEventListener('click', ()=>{
        for (const child of main.children) {
            console.log(child);
            if (child.id == targetID) {
                child.setAttribute("shown", "shown");
            } else {
                child.removeAttribute("shown");
            }
        }
        setTarget(targetID);
    });
});
