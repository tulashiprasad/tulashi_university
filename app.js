const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
const burgerLines = document.querySelectorAll('.burger div')
// console.log(burgerLines);
function navControl(){
burger.addEventListener('click', () =>{
    navLinks.classList.toggle('active')
    burgerLines.forEach(element => {
        element.classList.toggle('toggle')
    });
})
}

navControl()
