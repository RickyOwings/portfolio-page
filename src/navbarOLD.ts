async function main() {
    await onpageload();
    const navbar = document.getElementById("navbar");
    var oldScroll = window.scrollY;
    window.onscroll = () => {
        let newScroll = window.scrollY;
        let deltaScroll = newScroll - oldScroll;
        if (deltaScroll > 0) hideNavbars();
        else showNavbars();
        oldScroll = newScroll;
    }

    function hideNavbars() {
        if (!navbar) return;
        navbar.style.opacity = '0';
        navbar.style.pointerEvents = "none";
    }

    function showNavbars() {
        if (!navbar) return;
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = "all";
    }
}
main();

function onpageload() {
    return new Promise((resolve) => {
        window.addEventListener('DOMContentLoaded', () => {
            resolve('loaded');
        });
    })
}
