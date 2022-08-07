$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrowleft.png"> </button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrowright.png"></button>',
  });
  
 
  $('.sl-plan').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,   
    arrows:false,
    dots:true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
   ]
  });

//   a = document.getElementsByClassName('container');
// a[0].style.transform = "scale(0.9,1)";

});
// window.onresize = function() {
//     if (window.innerWidth <= 998) {
//         $(".card-deck-hide").removeClass("card-deck");
//     }
//     else {
//         $(".card-deck-hide").addClass("card-deck");
//     }
// };
//youtube script
$(document).on('click','.js-videoPoster',function(e) {  
  e.preventDefault();
  var poster = $(this); 
  var wrapper = poster.closest('.js-videoWrapper');
  videoPlay(wrapper);
});
function videoPlay(wrapper) {
  var iframe = wrapper.find('.js-videoIframe'); 
  var src = iframe.data('src');  
  wrapper.addClass('videoWrapperActive');  
  iframe.attr('src',src);
}


// width: calc (80%);