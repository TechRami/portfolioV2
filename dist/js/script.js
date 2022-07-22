const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('.menu-btn');
const menuLines = document.getElementsByClassName('line');


const animateBtn = () =>{
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('bgc-dark');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('active-navLink')
    }
    for (let i = 0; i < menuLines.length; i++) {
        menuLines[i].classList.toggle('active-menuButton')
    }
    logo.classList.toggle('active-logo')
}

menuBtn.addEventListener('click', animateBtn)


// window.onscroll = () => {
//     if (window.scrollY >= 150 && window.scrollY <= 249) {
//         navbar.classList.add('scrolled');
//     }
// }
