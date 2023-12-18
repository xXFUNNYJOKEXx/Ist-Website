window.onscroll = function() {scrollFunction()};
      
function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight * 0.5 || document.documentElement.scrollTop > window.innerHeight * 0.5) {
        document.getElementById("header").style.paddingTop = "0px";
        document.getElementById("header").style.paddingBottom = "0px";
        document.getElementById("header").style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8))'
    } else {
        document.getElementById("header").style.paddingTop = "20px";
        document.getElementById("header").style.paddingBottom = "20px";
        document.getElementById("header").style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))'
    }
}

function makeActive() {
    var element = document.getElementById("text");
    element.classList.add("active");
    element.innerHTML="This is Active";
 }