$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 350);
    $(".top").css("max-height", 200 - $(window).scrollTop() / 2);
});
