// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {


    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();


     //Adjusting Intro Components Spacing based on detected screen resolution
     $('.fullwidth').css('height',vW);
     $('.fullheight').css('height',vH);
     $('.halfheight').css('height',vH/2);
     $('.halfwidth').css('width',vW/2);



    //Mobile Menu (multi level)
    $('nav.mobile-nav').meanmenu({
        meanScreenWidth: "1199"
      });


    $(".scroll-indicator").on('click', function() {
        var offset = 0; //Offset of 0px

        $('html, body').animate({
            scrollTop: $("#reveal-section").offset().top + offset
        }, 2000);
    });




});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends









