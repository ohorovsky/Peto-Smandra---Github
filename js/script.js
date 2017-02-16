$(function() {
    $('body').removeClass('fade-out');
});


    


$(document).ready(function() {
    if(($(window).width())<1700){
            
            $("#config .col-md-8").removeClass("col-md-8").addClass("col-md-6");
            $("#config .col-md-4").removeClass("col-md-8").addClass("col-md-6");
        }
    
    $(window).scroll(function () {
        
        //Navbar hide on click a
    
        if(($(window).width())<992)
            $('.collapse a').click(function(){
                $(".navbar-toggler").click();
        });
   
        
        //parallax on header
        var wScroll = $(this).scrollTop();
        var headerP = 25+(wScroll/20);
        $(".mur").css({
            'transform' : 'translate(0px, -'+ wScroll/40 +'%)'
        })
        $("#header").css({
            'background-position' : '50% '+headerP+'%'
           
        })
        $(".logo").css({
            'transform' : 'translate(0px, '+ wScroll/1.7 +'%)'
           
        })
       
    
      //if you hard code, then use console.log to determine when you want the nav bar to stick.  
      
      console.log($('#header').height())
    
      
          
          if ($(window).scrollTop() > $('#header').height()) {
          $('.navbar').addClass('navbar-fixed-top').css({
              'background-color' : 'rgba(0,0,0,1)',

          });
            $('.navbar a').css({
                'color': '#F5F5F5'
            });
            $('.navbar .active').css({
                'font-weight': 'bold',
                'border-top': '5px solid #C06014',
                'margin-top':'-5px'
            })

        }
            if ($(window).scrollTop() < $('#header').height()) {
              $('.navbar').removeClass('navbar-fixed-top').css({
                  'background-color' : 'rgba(0,0,0,0.2)'
              });
                $('.navbar a').css({
                    'color': 'black',

                });


                $('.navbar .active').css({
                    'font-weight': 'normal',
                    'border-top': 'none',
                    'margin-top':'0px'
                })
            }
          
      
      
    
    
    
  });
    
    
    
    //Animsition
    
    $(".animsition").animsition({
    inClass: 'fade-in-up',
    outClass: 'fade-out-up',
    inDuration: 1000,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
    
    //POPOVERSSS
    
    $(function () {
        
        $('[data-toggle="popover"]').popover()
  })
    $('.popover-dismiss').popover({
  trigger: 'focus'
  })
    
    //Shopping cart
    
    shoppingCart_object.loadCart();
    displayCart();
    $("body").on("click",".add-to-cart",function(event){
        
        var name = $(this).attr("data-name");
        
        var price = Number($(this).attr("data-price"));
        
        shoppingCart_object.addItemToCart(name,price);
        displayCart();
    })
    
    $("#vyberDisp").click(function(event){
        
        var name = $(".carousel-item.active").attr("data-name");
        var price = Number($(".carousel-item.active").attr("data-price"));
        shoppingCart_object.addItemToCart(name,price);
        displayCart();
    })
    
    
    $("#show-cart").on("click",".delete-item",function(event){ //if we did $(.delete-item).click it wont work coz it doesnt exist..in                                                               this way we choose show-cart which exists and 'on' click and that it                                                                has smth to do with 'delete-item'...
        var name = $(this).attr("data-name");
        shoppingCart_object.removeItemFromCartAll(name);
        displayCart();
    })
    
    $("#clear-cart").click(function(event){
        shoppingCart_object.clearCart();
        displayCart();
    })
    
    function displayCart(){
        var cartArray = shoppingCart_object.listCart();
        var output = "";
        for(var i in cartArray){
            output += "<li>"+ cartArray[i].name+" <button class='delete-item pull-right' data-name='"+ cartArray[i].name +"'><i class='fa fa-times' aria-hidden='true'></i></button><span class='cena pull-right'>"+ cartArray[i].price +" £ </span></li>"
        }
        $("#show-cart").html(output);
        $("#total-cart").html(shoppingCart_object.totalCart());
    }
    
    
   
    
});
