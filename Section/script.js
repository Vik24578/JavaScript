let navElement = document.querySelector("nav");
let navLinks = navElement.querySelectorAll("a");
let section = document.querySelectorAll("section");


let hiddenAll = () => {
  navLinks.forEach(link => link.parentElement.classList.remove("active"))
}


const show = () => {
  section.forEach(link => link.classList.add("hidden"))
}


navLinks.forEach(link => {
  link.addEventListener("click",() => {
    hiddenAll();
    show();

    link.parentElement.classList.add("active")

    let dupa = document.querySelector(link.hash);
    dupa.classList.remove("hidden")

  })
})
