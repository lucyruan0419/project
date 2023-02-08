const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navi");
const links = document.querySelectorAll(".navi li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});