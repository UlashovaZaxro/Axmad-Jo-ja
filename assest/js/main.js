
let navlist = document.getElementById("navlist");
navlist.style.maxHeight = "0px";
navlist.style.padding = "0px";

function togglemenu() {
    if (navlist.style.maxHeight == "0px") {
        navlist.style.maxHeight = "180px";
    }
    else {
        navlist.style.maxHeight = "0px";
    }
}

// -----------------------------------------------
window.addEventListener("scroll", function(){
var navScroll = document.getElementById("nav");
navScroll.classList.toggle("fixed", window.scrollY > 15)
})