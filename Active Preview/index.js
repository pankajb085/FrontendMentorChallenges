const footerElem = document.getElementsByClassName("share");
const footerEl = document.getElementsByTagName("footer");

function handleClick(){
    if(innerWidth < 768){
        footerElem[0].classList.toggle("none");
        footerElem[2].classList.toggle("none");
        footerElem[2].classList.toggle("active");
        footerEl[0].classList.toggle("footer-active");
    }else{
        footerElem[1].classList.toggle("active");
    }
}
