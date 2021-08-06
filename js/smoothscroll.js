$(document).ready(function() {
  var $navcont = $(".navbar");
  $("a").on('click', function(event) {
    var hash = this.hash;
    if (hash !== "") {
      event.preventDefault();
      var smoothscrollToPosition = $(hash).offset().top - $navcont.height();
      $('html, body').animate({
        scrollTop: smoothscrollToPosition
      }, 800, function() {
        window.location.hash = hash;
        $('html').animate({
          scrollTop: smoothscrollToPosition
        }, 0);
      });
    }
  });
});
