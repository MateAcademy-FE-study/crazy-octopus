 // 
 //            function Animation()
 //            {
 //                $(".services__content-text:visible").addClass("animated fadeInLeft");
 // $(".services__img:visible").addClass("animated fadeInLeft");
 // $(".services__content-text:visible").addClass("animated fadeInRight");
 // $(".services__img:visible").addClass("animated fadeInRight");
 // $(".services__content-text:visible").addClass("animated fadeInLeft");

       
 //            }
 window.addEventListener("scroll", isScrolledIntoView);
 function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

function toggleAnimationProCon(element){
let elementtoAnimate= document.querySelector('.services__img')[0];

if(isScrolledIntoView(elementtoAnimate)){
	prosdiv.classList.add("animated fadeInLeft");
	consdiv.classList.add("animated fadeInLeft");
}else{
	prosdiv.classList.remove("animated fadeInLeft");
	consdiv.classList.remove("animated fadeInLeft");
}
}