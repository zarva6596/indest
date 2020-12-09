$(document).ready(function() {
   $('.insights__slider').slick({
      infinite: false,
      variableWidth: true,
      slidesToShow: 3,

      responsive: [
         {
            breakpoint: 1600,
            settings: {
               variableWidth: true,
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 1,
               arrows: false,
               dots: true,
            }
         }
      ],
   });
})