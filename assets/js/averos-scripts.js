var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("masthead")[0].style.top = "0";
    } else {
    document.getElementsByClassName("masthead")[0].style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}
