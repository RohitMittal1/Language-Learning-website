var sun = document.getElementById("sun-pic")
var moon = document.getElementById("moon-pic")
var body = document.getElementsByTagName("body")[0]
function darkMode(){
    sun.style.display="none"
    moon.style.display="block"
    body.classList.toggle("body-light")
}
function lightMode(){
    sun.style.display="block"
    moon.style.display="none"
    body.classList.toggle("body-light")
}
darkMode()
lightMode()



function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var scrollTop =(document.documentElement.scrollTop);

    if (scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}


