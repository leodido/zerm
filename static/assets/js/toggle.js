var theme = document.getElementById("invert-color-theme");
var toggles = document.querySelectorAll(".default-color");

function toggleClass(nodeEl, className) {
    let hasClass = nodeEl.classList.contains(className);
    theme.disabled = !hasClass;
    nodeEl.classList.toggle(className, !hasClass);
}

theme && toggles && toggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        toggles.forEach((t) => toggleClass(t, "default-color"));
    })
});