var mySwiper = new Swiper('.swiper-container', {
    // slidesPerView: 3,
    // slidesPerColumn: 3,
    // slidesPerGroup:3,

    // direction: "horizontal",

    // //There is lazy loading of the images in the docs for the images not on screen!

    // //For use in many slides!
    // //dynamicMainBullets:true,

    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    // grid: {
    //     fill: 'row',
    //     rows: 3
    // },

    //BREAKPOINTS
    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,

            direction: "horizontal",

            pagination: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            grid: {
                fill: 'row',
                rows: 1
            },
        },
        320: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            direction: "horizontal",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            grid: {
                fill: 'row',
                rows: 2
            },
        },
        700: {
            slidesPerView: 3,
            slidesPerColumn: 3,
            slidesPerGroup:3,
            direction: "horizontal",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            grid: {
                fill: 'row',
                rows: 3
            },
        },
    }
});