let d_menu = document.querySelector(".dropdown-toggle")
let dropdown_menu = document.querySelector('.dropdown-menu')
console.log(d_menu, dropdown_menu);

d_menu.addEventListener("click", () => {
  dropdown_menu.classList.toggle("active")
})