// const swiper = new Swiper('.card-wrapper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
//     spaceBetween: 30,
  
    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    
    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    
    // // Responsive breakpoints
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1, // Fixed spelling from 'sildesPerView' to 'slidesPerView'
    //     },
    //     768: {
    //         slidesPerView: 2, // Example: Show 2 slides on screens wider than 768px
    //     },
    //     1024: {
    //         slidesPerView: 3, // Example: Show 3 slides on screens wider than 1024px
    //     },
    // },

    var TrandingSlider = new Swiper('.tranding-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    


