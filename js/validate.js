// $("#userMail").on("input", function() {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   var input = document.getElementById("userMail").value;
//   console.log("changed");
//   if (input !== "") {
//     if (input.match(mailformat)) {
//       $("#errorMessage").css({"transform": "translateY(-100%)", "opacity": "0"});
//     }
//     else {
//       $("#errorMessage").css({"transform": "translateY(-20%)", "opacity": "1"});
//     }
//   } else {
//     $("#errorMessage").css({"transform": "translateY(-100%)", "opacity": "0"});
//   }
// });

function validate () {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var input = document.getElementById("userMail").value;
  if (input.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address. Please try again.");
    return false;
  }
}
