async function main(){
    await onpageload();

    const navbar = document.getElementById("navbar");

    var oldScroll = window.scrollY;
    window.onscroll = ()=>{
        let newScroll = window.scrollY;
        let deltaScroll = newScroll - oldScroll;
        if (deltaScroll > 0) hideNavbars();
        else showNavbars();
        oldScroll = newScroll;
    }

    function hideNavbars(){
        navbar.style.opacity = 0;
    }

    function showNavbars(){
        navbar.style.opacity = 1;
    }
}
main();

function onpageload(){
    return new Promise((resolve)=>{
        window.addEventListener('DOMContentLoaded', ()=>{
            resolve('loaded');
        });
    })
}