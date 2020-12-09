@@include('webpcss.js');
@@include('slider.js');
@@include('form.js');

$(function() {
})

$('body').scroll(function() {
   let width = $('body').width();

   if ($(this).scrollTop() >= 100) {
      $('.header').addClass('header--scroll');
      $('.header__mobile').addClass('header__mobile--scroll');
   } else {
      $('.header').removeClass('header--scroll');
      $('.header__mobile').removeClass('header__mobile--scroll');
   }
});

$('.header__mobile').click(function() {
   if (!$('.header').hasClass('header--scroll')) {
      $('.header').addClass('header--scroll');
   } else if ($('.header').hasClass('header--scroll') && $('body').scrollTop() < 100) {
      $('.header').removeClass('header--scroll');
   }

   $('.header__navBar').toggleClass('header__navBar--active');
   $('.header__mobile').toggleClass('header__mobile--active');
   $('.header__logo').toggleClass('header__logo--active');

   let mobileText = $('.header__mobile p').text();

   if (mobileText === 'menu') {
      $('.header__mobile p').text('close');
   } else {
      $('.header__mobile p').text('menu');
   }
})
