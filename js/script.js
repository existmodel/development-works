$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    scrollingSpeed: 1000,
    responsiveWidth: 1023
  });
});

      var navMain = document.querySelector(".main-nav");
      var navToggle = document.querySelector(".main-nav__toggle");
      var navMainList = navMain.querySelector(".main-nav__list");

      navToggle.addEventListener("click", function() {
        if (navMainList.classList.contains("main-nav__list--closed")) {
          navMainList.classList.remove("main-nav__list--closed");
          // navMainList.classList.add("main-nav--opened");
        } else {
          navMainList.classList.add("main-nav__list--closed");
          // navMainList.classList.remove("main-nav--opened");
        }
      });



// $(document).ready(function(){   
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 0) {
//             $('#scroller').fadeIn();
//         } else {
//             $('#scroller').fadeOut();
//         }
//     });
//     $('#scroller').click(function () {
//         $('body,html').animate({
//             scrollTop: 0
//         }, 400);
//         return false;
//     });
// });

// $(document).ready(function(){
// });

$(function(){
  //scroll to top
  $('.button-up').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
});