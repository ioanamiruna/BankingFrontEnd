const btnHamburger = document.getElementById('btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function () {
    console.log('click hamburger');
    if (header.classList.contains('open')) { //CLOSE HAMBURGER MENU
        body.classList.remove('noscroll')
        header.classList.remove('open');
        fadeElems.forEach(function (element) {
            element.classList.add('fade-out')
            element.classList.remove('fade-in')
        })

        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
    }
    else { //OPEN HAMBURGER MENU
        body.classList.add('noscroll')
        header.classList.add('open')
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')

        })


    }

})