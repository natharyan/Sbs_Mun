$(document).ready(function() {
  var $navcont = $(".navbar");
  $("a").on('click', function(event) {
    var hash = this.hash;
    var url = this.href;
    url = url.split("/");
    url = url[url.length-1];
    if (hash !== "") {
      if (url !== "index.php" + hash) {
        event.preventDefault();
        var smoothscrollToPosition = $(hash).offset().top - $navcont.height();
        $('html, body').animate({
          scrollTop: smoothscrollToPosition}, 800, function() {
            window.location.hash = hash;
            $('html').animate({
            scrollTop: smoothscrollToPosition
          }, 0);
        });
      }
      else {
        event.preventDefault();
        hash = hash.split("#");
        hash = hash[hash.length-1];
        window.location = "index.php?link=" + hash;
      }
    }
  });
});
