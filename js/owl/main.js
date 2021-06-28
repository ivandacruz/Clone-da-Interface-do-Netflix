// o main aqui funciona como um setup 

$('.owl-carousel').owlCarousel({
    loop:true, //esse aqui causa o efeito infinito na hora da rolagem das imagens
    margin: 10,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6           
        }
    }

})