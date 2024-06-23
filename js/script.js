(function () {

    Fancybox.bind("[data-fancybox]", {});


    const quesions = document.getElementsByClassName('questions__item');
    for (let i = 0; i < quesions.length; i++) {
        quesions[i].addEventListener('click', () => {
            quesions[i].classList.toggle('active');
        })
    }

    const burger = document.getElementById('burger');
    const overlay = document.getElementById('overlay');
    const headerNav = document.getElementById('header__nav');
    burger.addEventListener('click', ()=> {
        headerNav.classList.toggle('active');
        burger.classList.toggle('active');
        overlay.classList.toggle('active');
    })

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        burger.classList.remove('active');
        headerNav.classList.remove('active');
    })

    const headerLinks = document.getElementsByClassName('header__nav-link');
    for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].addEventListener('click', () => {
            overlay.classList.remove('active');
            burger.classList.remove('active');
            headerNav.classList.remove('active');
        })
    }



})()