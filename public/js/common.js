/** scroll */
document.addEventListener('scroll', function () {
    if(scrollHandler.value == 1) {
        checkPageLoading();
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
}, {
    passive: true
});
function goToTop() {
    document.documentElement.scrollTop = 0
}
function VanillaTilt_init() {
    VanillaTilt.init(document.querySelectorAll(".timeline ul li .content section .circle"), {
        max: 25,
        speed: 400
    });
}
/** end scroll */