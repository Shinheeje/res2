$(document).ready(function(){
    $('.header_in .allBtn').click(function(){
        $('.header_in nav').animate({left:0},400,'swing');
    });

    $('.header_in button').click(function(){
        $('.header_in nav').animate({left:-300},200);
    });

    $(window).resize(function(){
        $('.header_in nav').removeAttr('style');
    })
});