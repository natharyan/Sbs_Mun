function reload() {
  img = document.getElementById("capt");
  img.src = "captcha.php";
}

$(document).ready(function(){
  $('#capt').attr('src', 'captcha.php');
});
