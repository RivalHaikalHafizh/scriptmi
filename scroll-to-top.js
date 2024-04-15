// Smooth scroll to top
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollTop.classList.remove("opacity-0");
        scrollTop.classList.add("opacity-100");
    } else {
        scrollTop.classList.remove("opacity-100");
        scrollTop.classList.add("opacity-0");
    }
});

function scrollToTop() {
    if (window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 70);
            scrollToTop();
        }, 5);
    }
}

scrollTop.addEventListener("click", () => {
    scrollToTop();
});
