let topScroll = 0;
let navigationClass = document.getElementsByClassName("navigation-fixed-top");
let navUrl = document.getElementsByClassName("navbar");

window.onscroll = function () {
    topScroll = document.documentElement.scrollTop;
    if (topScroll > 0) {
        navigationClass[0].classList.add("navigation-transparent");
        navigationClass[0].classList.remove("navigation-transparent-remove");
        navUrl[0].classList.add("navbarScroll");
    } else {
        navigationClass[0].classList.remove("navigation-transparent");
        navigationClass[0].classList.add("navigation-transparent-remove");
        navUrl[0].classList.remove("navbarScroll");
    }
};
