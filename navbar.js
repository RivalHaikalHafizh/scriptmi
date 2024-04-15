window.onscroll = function () {
    const navLogo = document.getElementById("nav-logo");
    const navHeight = 73;

    if (window.pageYOffset > navHeight) {
        // remove the lg:hidden class from the logo and add opacity transition
        navLogo.classList.remove("lg:hidden");
    } else {
        // add the lg:hidden class to the logo and remove opacity transition
        navLogo.classList.add("lg:hidden");
    }
};
