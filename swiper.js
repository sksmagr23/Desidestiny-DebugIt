document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        speed: 400,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        loop: true,
        direction: "horizontal",
        autoplay:{
            delay: 5000,
        },
        spaceBetween: 100,
        grabCursor: true,
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const swiper1 = new Swiper(".swiper1", {
        slidesPerView: 1,
        spaceBetween: 90,
        slidesPerGroup: 1,
        loop: true,
        fade: true,
        speed: 400,
        centerSlide: true,
        grabCursor: true,
        LoopFillGroupWithBlank: true,
        autoplay:{
            delay: 5000,
        },
        breakpoints: {
            320:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:1,
            },
            968:{
                slidesPerView:1,
            },
        }

    });
});


document.addEventListener("DOMContentLoaded", function() {
    const swiper3 = new Swiper(".swiper3", {
        slidesPerView: 3,
        speed: 400,
        slidesPerGroup: 1,
        loop: true,
        fade: true,
        centerSlide: true,
        direction: "horizontal",
        autoplay:{
            delay: 4000,
        },
        spaceBetween: 35,
        grabCursor: true,
        LoopFillGroupWithBlank: true,
        breakpoints:{
            335: {
                slidesPerView: 1,
            },
            750: {
                slidesPerView: 2,
            },
            970: {
                slidesPerView: 3,
            },
        },
        direction: "horizontal",
    });
});