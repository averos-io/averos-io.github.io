var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("masthead")[0].style.top = "0";
    } else {
    document.getElementsByClassName("masthead")[0].style.top = "-5em";
    }
    prevScrollpos = currentScrollPos;
}



window.addEventListener("load", function(){
    var el = document.getElementsByClassName('active');
    if (el!==null && el.length > 0){
        // window.scrollTo(el.currentScrollPos);
        el[0].scrollIntoView();
    }
});