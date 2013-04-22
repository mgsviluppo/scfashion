$(window).bind('load',function() {	
    var act='';
    
    $('#content > ul > li').css({position:'absolute', display:'none'});
    $('#content > ul > li').find('.box1').css({height:'0'})
    
    $('#menu > li > a span').css({opacity:'0'})
    
    $('#menu > li > a').hover(function(){
     $(this).find(' > span').stop().animate({opacity:'1'},600);                         
    }, function(){
     if (!$(this).hasClass('active')) {
         $(this).find(' > span').stop().animate({opacity:'0'},600);                         
     }
    })
    
    $('#menu > li').each(function(num){
     $(this).data({num:num})
    })
    $('#content > ul > li').each(function(num){
     $(this).data({num:num})
    })
    
    if (location.hash.slice(0,1)=='#') {
     page=location.hash.slice(2);
     open_page('#'+page);
     fl=false;
    }
    if ((location.hash=='#')||(location.hash=='')) {
     open_page('');
     fl=true;
         $('#content').stop().animate({height:'668'})
    }
    
    $(window).bind('hashchange', function(){
        if (this.location.hash != '#/') {
            page=this.location.hash.slice(2); 
            open_page('#'+page);
            return false;
        }
        if ($(this).attr('data-type')=='close') {
            close_page()    
        } 
    });
    
    
    $('a').click(function(){
     if ($(this).attr('href').slice(0,1)=='#' && $(this).attr('href').substring(1,8) != 'gallery') {
         page='#'+$(this).attr('href').slice(1); 
         location.hash='/'+page.slice(1);
         //open_page('#'+page);
         return false;
     }
     else{
         page='#'+$(this).attr('href').slice(1); 
         open_page('#'+page);
     }
        
     if ($(this).attr('data-type')=='close') {
         location.hash='';
         //close_page()    
     }
    })
    function open_page(page){
     // location.hash='/'+page.slice(1);
     $('#menu a').removeClass('active').find(' > span').stop().animate({opacity:'0'},600);
     Cufon.replace('#menu a', { fontFamily: 'Ubuntu', hover:true });
     num=$(page).data('num');
     $('#menu > li').each(function(){                      
         if ($(this).data('num')==num) {
             $(this).find('> a').addClass('active').find('> span').stop().animate({opacity:'1'},600);
             Cufon.replace('#menu a', { fontFamily: 'Ubuntu', hover:true });
         }
     })
     fl=false;
     $('#content').stop().animate({height:'868',opacity:0.9})
     if (act!='') {
         $(act).find('.box1').stop().animate({height:'0'},700,'easeOutCirc', function(){
             $(act).css({display:'none'});
             $(page).css({display:'block'}).find('.box1').stop().animate({height:'100%'},700, 'easeOutCirc', function(){
                 act=page;   
             }); 
         })
     } else {
         $(page).css({display:'block'}).find('.box1').stop().animate({height:'100%'},700, 'easeOutCirc', function(){
             act=page;   
         });     
     }
    }
    function close_page(page){
     $('#menu a').removeClass('active').find(' > span').stop().animate({opacity:'0'},600);
     Cufon.replace('#menu a', { fontFamily: 'Ubuntu', hover:true });
     //location.hash='';
     $(act).find('.box1').stop().animate({height:'0'},700,'easeOutCirc', function(){
         $(act).css({display:'none'});
         act='';
         fl=true;
         $('#content').stop().animate({height:'668'})
     }); 
     return false;
    }
})