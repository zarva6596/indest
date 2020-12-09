$(function() {
   $('input').focus(function() {
      $(this).parent().addClass('input--active');
   });

   $('input').blur(function() {
      $(this).parent().removeClass('input--active');
   });
});