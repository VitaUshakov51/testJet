(function () {

    Fancybox.bind("[data-fancybox]", {});


    const quesions = document.getElementsByClassName('questions__item');
    if (quesions) {
        for (let i = 0; i < quesions.length; i++) {
            quesions[i].addEventListener('click', () => {
                quesions[i].classList.toggle('active');
            })
        }
    }


    const burger = document.getElementById('burger');
    const overlay = document.getElementById('overlay');
    const headerNav = document.getElementById('header__nav');

    if (burger && overlay && headerNav ) {
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
    }




    const headerLinks = document.getElementsByClassName('header__nav-link');
    if (headerLinks) {
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].addEventListener('click', () => {
                overlay.classList.remove('active');
                burger.classList.remove('active');
                headerNav.classList.remove('active');
            })
        }
    }


    const phone = document.getElementById('phone');
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    const mask = IMask(phone, maskOptions);

    const formButton = document.getElementById('formButton');
    if (formButton) {
        formButton.addEventListener('click', () => {
            const form = $(this).closest('form');
            const actUrl = form.attr('action');
            $.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function (data) {
                    sessionStorage.setItem('formButton', 'send');
                    console.log('Форма отправлена')
                },
                error: function () {


                }
            });

        })

    }



})()