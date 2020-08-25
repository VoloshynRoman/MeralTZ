$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4,
        infinite: false,
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    appendArrows:$('.mobile_arrow')
                }
            },
            {
                breakpoint: 547,
                settings: {
                    slidesToShow: 1,
                    appendArrows:$('.mobile_arrow')
                }
            }
        ]
    });
});