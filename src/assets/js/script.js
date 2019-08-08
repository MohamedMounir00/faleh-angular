/*global $*/
$(function () {

    'use strict';

    // Making Loading Screen
    $(window).on("load", function () {
        $('body').css('overflow', 'auto')
        $('.loading').fadeOut(3000);
    })

    //
    // // Trigger Nice Scroll Plugin
    // $("html").niceScroll({
    //     cursorcolor: "#2598c4",
    //     cursorwidth: "10px",
    //     smoothscroll: 'true',
    //     cursorborderradius: "0px"
    // });
    //
    //
    // // Making Scroll To Top
   var scrollButton = $('#scroll-top');
     scrollButton.click(function() {
         $('html,body').animate({scrollTop : 0} , 900);
   });

    // Trigger WOW.JS Plugin
    new WOW().init();
    
    $("#profileImage").click(function(e) {
    $("#imageUpload").click();



});
  
    if (window.matchMedia('(max-width: 575.98px)').matches) {
         $('.all-sec-btn').click(function(){
        var y = $(window).scrollTop();  //your current y position on the page
    $(window).scrollTop(y+600);
   }); 
    } 
 

    

  





});
