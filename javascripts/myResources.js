$(document).ready(function(){
    $('.show_hide').click(function(){
        $(this).next('.slidingDiv').slideToggle();
         return false;
    });
});