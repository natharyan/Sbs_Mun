$(window).on('load', function() {
  var iShaggy = 1;
  var iAadya = 1;
  var scrollHeightShaggy = $("#read-more-shagnik").height();
  var scrollHeightAadya = $("#read-more-aadya").height();
  var readHeightShaggy = $("#read-more-shagnik").height() + "px";
  var readHeightAadya = $("#read-more-aadya").height() + "px";
  $(".read-more").css("height", "0");

  $(".read-button-shagnik").on('click', function(event) {
    if (iShaggy % 2 == 0) {
      $("#read-more-shagnik").animate({height: "0"});
      $(this).text("Show More");

      var smoothscrollToPosition = $(document).scrollTop() - scrollHeightShaggy;
      console.log(smoothscrollToPosition);
      $('html, body').animate({
        scrollTop: smoothscrollToPosition
      }, 400);
      iShaggy++;
    } else {
      $("#read-more-shagnik").animate({height: readHeightShaggy});
      $(this).text("Show Less");
      iShaggy++;
    }
  });
  $(".read-button-aadya").on('click', function(event) {
    if (iAadya % 2 == 0) {
      $("#read-more-aadya").animate({height: "0"});
      $(this).text("Show More");

      var smoothscrollToPosition = $(document).scrollTop() - scrollHeightAadya;
      $('html, body').animate({
        scrollTop: smoothscrollToPosition
      }, 400);
      iAadya++;
    } else {
      $("#read-more-aadya").animate({height: readHeightAadya});
      $(this).text("Show Less");
      iAadya++;
    }
  });
});
