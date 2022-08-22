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
    $('#team-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 600,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:3
            },
            1440:{
                items:4
            },
        }
    })
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
    })

$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
    })

//HomepageContact
function validation(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(!name.match(/^[a-zA-Z ]*$/)){
        error.innerHTML = 'Invalid name or email address';
        return false;
    } 
    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        error.innerHTML = 'Invalid name or email address';
        return false;
    }
    return true;
}

var error = document.getElementById('error')

function checkStatus(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if(name.length ==0){
        error.innerHTML = '';
    }
    if(email.length ==0){
        error.innerHTML = '';
    }
}



//ModalContact
function validationModal(){
    const nameModal = document.getElementById('nameModal').value;
    const emailModal = document.getElementById('emailModal').value;

    if(!nameModal.match(/^[a-zA-Z ]*$/)){
        errorModal.innerHTML = 'Invalid name or email address';
        return false;
    } 
    if (!emailModal.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        errorModal.innerHTML = 'Invalid name or email address';
        return false;
    }
    return true;
}
var errorModal = document.getElementById('errorModal')

function checkStatusModal(){
    var nameModal = document.getElementById('nameModal').value;
    var emailModal = document.getElementById('emailModal').value;

    if(nameModal.length ==0){
        errorModal.innerHTML = '';
    }
    if(emailModal.length ==0){
        errorModal.innerHTML = '';
    }
}
