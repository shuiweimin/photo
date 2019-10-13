// register responsive nav list on-off
const close = document.querySelector(".close");
const navList = document.querySelector(".nav-list");
close.addEventListener("click", () =>{
  close.innerText=='三'?close.innerText='X': close.innerText='三'
  navList.classList.toggle("nav-list-active")}
);
