
var swiper = new Swiper(".indexSwiper", {
    speed: 1500,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        clickable: true,

    },
    autoplay: {
        disableOnInteraction: false,
    }
});


// NEWS SWIPER
var swiper = new Swiper(".newsSwiper", {
    slidesPerView: "auto",
    speed: 4500,
    loop: true,

    spaceBetween: 50,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    autoplay: {
        disableOnInteraction: false,
    }
});

// NEWPOT SWIPER
var swiper = new Swiper(".newpotSwiper", {
    slidesPerView: "auto",
    speed: 10000,
    loop: true,
    spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    autoplay: {
        disableOnInteraction: false,
    }
});

// TEXT SWIPER
var swiper = new Swiper(".textSwiper", {
    slidesPerView: "auto",
    speed: 600,
    loop: true,
    spaceBetween: 30,

    autoplay: {
        disableOnInteraction: false,
    }
});

