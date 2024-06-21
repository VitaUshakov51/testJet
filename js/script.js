(function () {

    Fancybox.bind("[data-fancybox]", {});


    const quesions = document.getElementsByClassName('questions__item');
    for (let i = 0; i < quesions.length; i++) {
        quesions[i].addEventListener('click', () => {
            quesions[i].classList.toggle('active');
        })
    }
})()