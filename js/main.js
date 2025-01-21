const nav = document.querySelector("#nav");
const openNav = document.querySelector("#open");
const closeNav = document.querySelector("#close");

openNav.addEventListener("click", ()=> {
    nav.classList.add("nav__visible");
})

closeNav.addEventListener("click", ()=> {
    nav.classList.remove("nav__visible");
})