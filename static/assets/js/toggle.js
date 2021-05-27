var theme = document.getElementById("invert-color-theme");
var toggles = document.querySelectorAll(".default-color");
var menu = document.querySelector(".menu");
var c = getComputedStyle(document.body).getPropertyValue("--phoneWidth");

function isMobile() {
    return window.matchMedia(c).matches
}

function toggleClass(nodeEl, className, hasClass) {
    theme.disabled = !hasClass;
    nodeEl.classList.toggle(className, !hasClass);
    localStorage.setItem("theme-storage", hasClass ? "light" : "default");
}

theme && toggles && toggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        menu && menu.classList.toggle("hidden", isMobile());
        toggles.forEach((t) => toggleClass(t, "default-color", t.classList.contains("default-color")));
    })
});

var save = localStorage.getItem("theme-storage") || "default";
toggles.forEach((t) => toggleClass(t, "default-color", save !== "default"));
