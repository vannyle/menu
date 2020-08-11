document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    // const megaMenu = document.querySelector('.mega-menu');
    const menuItem = document.querySelectorAll('.menu-item');
    const displayOverlay = () => {
        overlay.style.visibility = 'visible';
    }

    const removeOverlay = () => {
        overlay.style.visibility = 'hidden';
    }

    menuItem.forEach(e => {
        const mouseOver = e.addEventListener('mouseover', displayOverlay);
        const mouseOut = e.addEventListener('mouseout', removeOverlay)
        if (mouseOver) {
            displayOverlay();
        } else if (mouseOut) {
            removeOverlay();
        }

    })


    menuBtn.addEventListener('click', () => {
        if (menu.classList.contains('menu--close')) {
            menu.classList.add('menu--open');
            menu.classList.remove('menu--close');
            menuBtn.classList.add('header__toggle--open');
            menuBtn.classList.remove('header__toggle--close');
            displayOverlay();
        } else {
            menu.classList.remove('menu--open');
            menu.classList.add('menu--close');
            menuBtn.classList.add('header__toggle--close');
            menuBtn.classList.remove('header__toggle--open');
            removeOverlay();
        }
    })

})