document.addEventListener('DOMContentLoaded', function () {
    let mySwiper;

    mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                updateNavigationButtons();
            },
            slideChangeTransitionEnd: function () {
                updateNavigationButtons();
            },
        },
    });

    function updateNavigationButtons() {
        const prevButton = document.querySelector('.swiper-button-prev');
        const nextButton = document.querySelector('.swiper-button-next');

        // Перевірка чи на останньому слайді
        if (mySwiper && mySwiper.isBeginning) {
            prevButton.classList.add('swiper-button-disabled');
            prevButton.setAttribute('aria-disabled', 'true');
        } else {
            prevButton.classList.remove('swiper-button-disabled');
            prevButton.setAttribute('aria-disabled', 'false');
        }

        if (mySwiper && mySwiper.isEnd) {
            nextButton.classList.add('swiper-button-disabled');
            nextButton.setAttribute('aria-disabled', 'true');
        } else {
            nextButton.classList.remove('swiper-button-disabled');
            nextButton.setAttribute('aria-disabled', 'false');
        }
    }
});