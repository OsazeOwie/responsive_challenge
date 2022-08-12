const hambuger = document.querySelector(".hamburger-icon");
const bar = document.querySelector(".bar");
const nav = document.querySelector(".nav--toggle");

hambuger.addEventListener("click", ()=>{
    hambuger.classList.toggle("active");
    bar.classList.toggle("active");
    nav.classList.toggle("nav--toggle");
})
