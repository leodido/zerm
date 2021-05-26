var theme = document.getElementById("invert-color-theme");
var toggles = document.querySelectorAll(".default-color");
var menu = document.querySelector(".menu");
var c = getComputedStyle(document.body).getPropertyValue("--phoneWidth");

function isMobile() {
    return window.matchMedia(c).matches
}

function toggleClass(nodeEl, className) {
    let hasClass = nodeEl.classList.contains(className);
    theme.disabled = !hasClass;
    nodeEl.classList.toggle(className, !hasClass);
}

theme && toggles && toggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        menu && menu.classList.toggle("hidden", isMobile());
        toggles.forEach((t) => toggleClass(t, "default-color"));
    })
});