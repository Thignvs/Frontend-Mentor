const hamburger = document.getElementById('hamburger')

function toggleMenu(){
    const nav = document.getElementById('nav-bar')
    nav.classList.toggle('active')
}
hamburger.addEventListener("click", toggleMenu);




function closeMenu() {
    var menu = document.getElementById("nav-bar");
    menu.classList.remove('active');
}

function scrnSizeVrfy() {
    var larguraJanela = window.innerWidth;                //auto close hamburger menu

    if (larguraJanela >= 768) {
        closeMenu();
    }
}
window.addEventListener("resize", scrnSizeVrfy);