$(function() {
    $('body').removeClass('fade-out');
});

$(document).ready(function() {
    
    var winW = $(window).width();
    var winH = $(window).height();
    $(".mur").css({
        'bottom' : ''
    })
    
    
    $(window).scroll(function () {
        //parallax on header
        var wScroll = $(this).scrollTop();
        
        $(".mur").css({
            'transform' : 'translate(0px, -'+ wScroll/40 +'%)'
        })
        $(".pozadie").css({
            'transform' : 'translate(0px, -'+ wScroll/60 +'%)'
           
        })
        $(".logo").css({
            'transform' : 'translate(0px, '+ wScroll/2 +'%)'
           
        })
        
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($('#header').height())
    if ($(window).scrollTop() > $('#header').height()) {
      $('.navbar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < $('#header').height()) {
      $('.navbar').removeClass('navbar-fixed-top');
    }
  });
    
    $(".podorys").on("click",function(){
        
        $(".parcel").fadeOut();
        $(".vyber").fadeIn();
    });
   
    
});
