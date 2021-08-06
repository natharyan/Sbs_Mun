$(function () {
  $(document).scroll(function () {
	  var $navcont = $(".navbar");
    // var $rnavcont = $(".rnavbar-container");
    if ($(this).scrollTop() > $navcont.height()) {
      $navcont.addClass('scrolled_container');
      // $rnavcont.addClass('scrolled_container');
    } else {
      $navcont.removeClass('scrolled_container');
      // $rnavcont.removeClass('scrolled_container');
    }
	});
});
