$(document).ready(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
    })
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
    })

$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
    })


