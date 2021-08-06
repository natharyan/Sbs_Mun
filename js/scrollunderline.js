$(document).ready(function(){
  var navOffset = $(".navbar").offset().top;
  var navHeight = $(".navbar").height();

  $(document).scroll(function(){
    var totalOffset = $(this).scrollTop() + navHeight;
    $(".section").each(function(index, element){
      var sectionOffset = $(this).offset().top;
      var sectionHeight = $(this).height();
      if(totalOffset > sectionOffset - 1 && totalOffset < sectionOffset + sectionHeight -1){
        //-1 to prevent equilibrium stage where both sections are not underlined, when the navbar occupies the 1px border space
        var id = $(this).attr("id");
        $('a[href="#'+id+'"]').parent('div').addClass('active');
      }
      else {
        var id = $(this).attr("id");
        $('a[href="#'+id+'"]').parent('div').removeClass('active');
      }
    });
  });
});
