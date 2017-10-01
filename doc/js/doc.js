$(document).ready(function () {
    if (window.location.pathname === '/') {
        $('html').addClass('home-page');
    }
    $('.md-logo').attr('href', '/PersianWebToolkit/beta/');
});

//fix page anchor easy scroll
// $(document).on('click', '.md-nav--secondary a', function (event) {
//     event.preventDefault();
//
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top - ($('.md-header').height() + 20)
//     }, 500);
// });


$(function() {
  $("a[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - ($('.md-header').height() + 20)
      }, 1000);
      return false;
    }
  }
 });
});