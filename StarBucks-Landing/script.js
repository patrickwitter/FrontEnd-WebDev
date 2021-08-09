function imgSlider(img, colour) {
    document.querySelector(".leadImg").src = img;
    document.documentElement.style.setProperty("--primary-color", colour);
}

function showMenu() {
    document.querySelector(".navlist").style.right = "0";
    document.querySelector(".navlist").style.width = "100%";

}

function closeMenu() {
    document.querySelector(".navlist").style.right = "-100px";
    document.querySelector(".navlist").style.width = "0";

}