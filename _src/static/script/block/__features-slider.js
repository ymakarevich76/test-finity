const swiper = new Swiper('.swiper-container', {
   loop: true,
   spaceBetween: 20,
   slidesPerView: 'auto',
   // autoHeight: true,
   // height: ,

   freeMode: true,

   breakpoints: {

      768: {
         freeMode: false,
         slidesPerView: 2,
         spaceBetween: 20,
         centeredSlides: true,
      },
      1200: {
         freeMode: false,
         centeredSlides: true,
         slidesPerView: 4,
         // width: 350,
         spaceBetween: 30,
      }
   }
});
