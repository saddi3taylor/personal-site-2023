$(document).ready(function(){
    let scrollButton = $('.button-to-top');

    scrollButton.on('click', function(){
        $(document).scrollTop(0);
    })

    $(window).scroll(function() {
        if($(document).scrollTop() >= 300){
            $(scrollButton).fadeIn(500)
        } else{
            $(scrollButton).fadeOut('fast')
        }
    })

})