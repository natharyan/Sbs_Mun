$(document).ready(function (){
  var i = 1;
  var top = $(".navbar").height();
  var height = $(".rnavbar-container").height() + "px";

  $(".rnavbar-container").css("top", top);
  $(".rnavbar-container").css("height", "0");
  $(".rnavbar-container").css("visibility", "visible");

  if (window.innerWidth <= 600) {
    $(".home").height(window.innerHeight + 'px');
    $("header").height(window.innerHeight + 'px');
    $(".logo-overlap img").attr('src','images/overlogo_mobile.png');
  }

  $(".responsive-navbar").on('click', function (){
    if (i % 2 == 0) {
      $(".rnavbar-container").animate({height: "0"});
      i++;
    } else {
      $(".rnavbar-container").animate({height: height});
      i++;
    }
  });

  $(".rnav-link").on('click', function (){
    $(".rnavbar-container").animate({height: "0"});
    i++;
  });
});
