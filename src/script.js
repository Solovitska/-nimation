document.addEventListener('DOMContentLoaded', function () {
    let mySwiper;

    // Ініціалізація Swiper
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

    // Функція для оновлення кнопок навігації Swiper
    function updateNavigationButtons() {
        const prevButton = document.querySelector('.swiper-button-prev');
        const nextButton = document.querySelector('.swiper-button-next');

        if (mySwiper && mySwiper.isBeginning !== undefined && mySwiper.isBeginning) {
            prevButton.classList.add('swiper-button-disabled');
            prevButton.setAttribute('aria-disabled', 'true');
        } else {
            prevButton.classList.remove('swiper-button-disabled');
            prevButton.setAttribute('aria-disabled', 'false');
        }

        if (mySwiper && mySwiper.isEnd !== undefined && mySwiper.isEnd) {
            nextButton.classList.add('swiper-button-disabled');
            nextButton.setAttribute('aria-disabled', 'true');
        } else {
            nextButton.classList.remove('swiper-button-disabled');
            nextButton.setAttribute('aria-disabled', 'false');
        }
    }

    // Функція для отримання списку відгуків
    function getReviews() {
        fetch('https://portfolio-js.b.goit.study/api/reviews')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch reviews');
            }
            return response.json();
        })
        .then(reviews => {
            if (reviews.length === 0) {
                document.querySelector('.swiper-wrapper').innerHTML = '<li>Not found</li>';
                return;
            }
            
            const reviewsList = reviews.map(review => `<li>${review.review}</li>`).join('');
            document.querySelector('.swiper-wrapper').innerHTML = reviewsList;
            
            // Ініціалізація Swiper після оновлення контенту
            mySwiper.update();
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
            // Відображення вспливаючого повідомлення про помилку
            alert('Error fetching reviews. Please try again later.');
        });
    }

    // Виклик функції для отримання відгуків
    getReviews(); 
});