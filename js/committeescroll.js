$(window).on('load', function() {
  var link = $("#committee-link").html();
  var $navcont = $(".navbar");

  setTimeout(function() {
    if (link !== "") {
      if (link !== "captcha") {
        link = "#" + link;
        var smoothscrollToPosition = $(link).offset().top - $navcont.height();

        $('html, body').animate({
          scrollTop: smoothscrollToPosition
        }, 1000, function() {
          $('html').animate({
            scrollTop: smoothscrollToPosition
          }, 0);
          window.history.replaceState({}, "", "index.php"+link);
        });
      } else {
        var smoothscrollToPosition = $(".form-container").offset().top - (2*$navcont.height());

        $('html, body').animate({
          scrollTop: smoothscrollToPosition
        }, 1000, function() {
          $('html').animate({
            scrollTop: smoothscrollToPosition
          }, 0);
          window.history.replaceState({}, "", "index.php#contact");
        });
      }
    }
  }, 100);
});
