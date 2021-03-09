$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>400){
            $('.nav-c').css('color','black');
        } else if($(this).scrollTop()>250){
            $('.nav-c').css('color','black')
        }else{
            $('.nav-c').css('color','#ffffff')
        }
    });

});
