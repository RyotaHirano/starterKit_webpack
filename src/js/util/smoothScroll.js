import $ from 'jquery';
import 'jquery.easing';

module.exports = function smoothScroll() {
  $('a[href^="#"]').on('click.smoothScroll', ev => {
    ev.preventDefault();
    $('html, body').animate({
      scrollTop: $($(ev.currentTarget).attr('href')).offset().top
    }, {
      duration: 600,
      easing: 'easeOutExpo'
    });
  });
}
