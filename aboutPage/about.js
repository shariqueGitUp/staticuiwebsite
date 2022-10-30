const openMenu = document.querySelector('.openMenu');
const myLinks = document.querySelector('.myLinks');
const closeMenu = document.querySelector('.closeMenu');
openMenu.addEventListener("click", show)
closeMenu.addEventListener("click", close)

function show() {
    myLinks.style.display = "flex";
    myLinks.style.top = "0"
}
function close() {
    myLinks.style.top = "-100%"
}