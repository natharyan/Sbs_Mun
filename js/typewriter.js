var i = 0;
var txt = "Senior Secretariat";
var speed = 100;
function typeWriter(){
  if (i < txt.length) {
    $("#typewriter").append(txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}
$(document).ready(function(){
  setTimeout(typeWriter, 1000);
});
