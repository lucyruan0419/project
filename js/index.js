
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

//鼠标滑过pagination控制swiper切换
/*         for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
            mySwiper.pagination.bullets[i].onmouseover = function () {
                this.click();
            };
        } */
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
    speed: 1000,
    loop: true,
    spaceBetween: 30,

    autoplay: {
        disableOnInteraction: false,
    }
});


// 滾動動畫

/* let my_block = document.getElementsByClassName("intro");

window.addEventListener("scroll", function(){
  
  console.log( my_block.getBoundingClientRect().top );
  if(my_block.getBoundingClientRect().top <= 0){
    my_block.classList.add("#parallax-0");
  }
  
});
 */
/* let boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  console.log(window.innerHeight);
  let triggerBottom = window.innerHeight * 0.8;
  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
} */




/* 
var controller = new ScrollMagic.Controller();
  
var scene = new ScrollMagic.Scene({
    triggerElement: ".intro"
})
.setClassToggle(".intro", "show")
.addTo(controller);

$(function () { // wait for document ready
    var flightpath = {
        entry : {
            curviness: 1.25,
            autoRotate: true,
            values: [
                    {x: 100,	y: -20},
                    {x: 300,	y: 10}
                ]
        },
        looping : {
            curviness: 1.25,
            autoRotate: true,
            values: [
                    {x: 510,	y: 60},
                    {x: 620,	y: -60},
                    {x: 500,	y: -100},
                    {x: 380,	y: 20},
                    {x: 500,	y: 60},
                    {x: 580,	y: 20},
                    {x: 620,	y: 15}
                ]
        },
        leave : {
            curviness: 1.25,
            autoRotate: true,
            values: [
                    {x: 660,	y: 20},
                    {x: 800,	y: 130},
                    {x: $(window).width() + 300,	y: -100},
                ]
        }
    };
    // init controller
    var controller = new ScrollMagic.Controller();

    // create tween
    var tween = new TimelineMax()
        .add(TweenMax.to($("#marquee_text"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
        .add(TweenMax.to($("#marquee_text"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
        .add(TweenMax.to($("#marquee_text"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#parallax-1", duration: 500, offset: 100})
                    .setPin("#scrolltext")
                    .setTween(tween)
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
}) */
