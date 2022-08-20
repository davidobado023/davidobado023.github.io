$(document).ready(function(){
    //Homepage
    $('#owl-home').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        responsive:{
            0:{
                nav: false,
            },
            768:{
                nav: true,
            }
        }
    })
    //Services
    $('#service-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
    })
    //Team
    $('#team').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
    })

$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
    })

    


