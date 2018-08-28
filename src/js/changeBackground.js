$(document).ready(function(){

  $(".features__box").click(function(){
       $('.features__box').removeClass('feature__active');
       $(this).addClass('feature__active');

  });

});