$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>3300){
            $('.nav-c').css('color','#ffffff');
        } else if($(this).scrollTop()>250){
            $('.nav-c').css('color','black')
        }else{
            $('.nav-c').css('color','#ffffff')
        }
    });
});
// navigator jquery

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>990){
            $('.top-btn').show()
        }else{
            $('.top-btn').hide()
        }
    })
})
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>3250){
            $('#top-btn').css('color','#ffffff');
        }else{
            $('#top-btn').css('color','#000')
        }
    });
});



$(function(){
    $('.col-pk').click(function(){
        $('.sec-03-top-none').css('display','block');
        $('.sec-03-top-none-sum').css('display','none');
        $('.sec-03-top-none-fall').css('display','none');
        $('.sec-03-top-none-win').css('display','none');
       
    });
    $('#col-pk').click(function(){
        $('.sec03-img-spring').css('display','block');
        $('.sec03-img-summer').css('display','none');
        $('.sec03-img-fall').css('display','none');
        $('.sec03-img-winter').css('display','none');
    });
});

$(function(){
    $('.col-gn').click(function(){
        $('.sec-03-top-none-sum').css('display','block');
        $('.sec-03-top-none').css('display','none');
        $('.sec-03-top-none-fall').css('display','none');
        $('.sec-03-top-none-win').css('display','none');
    });
    $('#col-gn').click(function(){
        $('.sec03-img-summer').css('display','block');
        $('.sec03-img-spring').css('display','none');
        $('.sec03-img-fall').css('display','none');
        $('.sec03-img-winter').css('display','none');
    });
});

$(function(){
    $('.col-br').click(function(){
        $('.sec-03-top-none-fall').css('display','block');
        $('.sec-03-top-none').css('display','none');
        $('.sec-03-top-none-sum').css('display','none');
        $('.sec-03-top-none-win').css('display','none');
    });
    $('#col-br').click(function(){
        $('.sec03-img-fall').css('display','block');
        $('.sec03-img-spring').css('display','none');
        $('.sec03-img-summer').css('display','none');
        $('.sec03-img-winter').css('display','none');
    });
});

$(function(){
    $('.col-gr').click(function(){
        $('.sec-03-top-none-win').css('display','block');
        $('.sec-03-top-none').css('display','none');
        $('.sec-03-top-none-sum').css('display','none');
        $('.sec-03-top-none-fall').css('display','none');
    });
    $('#col-gr').click(function(){
        $('.sec03-img-winter').css('display','block');
        $('.sec03-img-spring').css('display','none');
        $('.sec03-img-summer').css('display','none');
        $('.sec03-img-fall').css('display','none');
    });
});

//sec03 tab End

$(function(){
    $('.add-btn').click(function(){
      $('.sec04-img-con-none').css('display','block');
      $('.add-btn').css('display','none');
    });
});
