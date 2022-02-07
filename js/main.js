const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', () => {

    if(header.classList.contains('open')){ // open hamburger
        body.classList.remove('.noscroll');

        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
       
        headerMenu.style.visibility = "hidden";
        overlay.style.visibility = "hidden";
        
        
        
    }else{ // close hamburger
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        
        headerMenu.style.visibility = "visible";
        
        overlay.style.visibility = "visible";

        body.classList.add('.noscroll');

    }

})


