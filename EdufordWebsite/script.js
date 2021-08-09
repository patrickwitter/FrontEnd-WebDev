

var menu = document.getElementById("navLinks");
var closeBtn = document.getElementById("close-btn");

function showMenu() {
    menu.style.width = "40vw";
    closeBtn.style.display = "block";
    closeBtn.style.cursor = "pointer";

}
function closeMenu() {
    menu.style.width = "0";
    closeBtn.style.display = "none";
}