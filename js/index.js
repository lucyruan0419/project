// 設定 cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  // 取得 cookie 的值
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
    
  // 檢查某 cookie 是否存在
  function checkCookie(cname) {
    var cookie_value = getCookie(cname);
    if (cookie_value != "") {
      return true;
    } else {
      return false;
    }
  }

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

    spaceBetween: 30,

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

