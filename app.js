/*globals $:false */
/*jslint browser:true */
$(document).ready(function () {
    
    $('.hover-text').addClass('hidden');
    $(".col-sm-4 .front").on('mouseenter', function(){    
        
        if($(this).hasClass('welcome')){
            $(".welcome h1").text('Click to learn more.'); 
        }
        else{
            $(this).find("i").addClass('hidden');
            $(this).find('.hover-text').removeClass('hidden');
        }
    });
    
    $(".col-sm-4 .front").on('mouseleave', function(){   
        
        if($(this).hasClass('welcome')){
            $(".welcome h1").text('Welcome!'); 
        }
        else{
            $(this).find('.hover-text').addClass('hidden');
            $(this).find("i").removeClass('hidden');
           
        }
    });
    
    $(".flip-container").on('click', function(){
        $(this).toggleClass('flip');
    });
    
});