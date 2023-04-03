var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 3,
    slidesPerGroup:3,

    direction: "horizontal",

    //There is lazy loading of the images in the docs for the images not on screen!

    //For use in many slides!
    //dynamicMainBullets:true,

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
    }
  });