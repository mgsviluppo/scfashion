$(window).bind('load',function() {	
    var act='';
    
    if(this.location.hash.slice(2) == 'collezione')
       $('#content').attr('style','width:100%; margin-left:0px');
    else
       $('#content').attr('style','width:75%');
    
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
    });
    
    
    $('a').click(function(){
     if ($(this).attr('href').slice(0,1)=='#' && $(this).attr('href').substring(1,8) != 'gallery') {
         page='#'+$(this).attr('href').slice(1); 
         location.hash='/'+page.slice(1);
         //open_page('#'+page);
         return false;
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
        $('#content').stop().animate({height:'868'}) //opacity:0.9
        if (act!='') {
             $(act).find('.box1').stop().animate({height:'0'},500, function(){
                 $(act).css({display:'none'});
                 if(page == '#collezione')
                    $('#content').attr('style','width:100%; margin-left:0px');
                 else
                    $('#content').attr('style','width:75%');
                 $(page).css({display:'block'}).find('.box1').stop().animate({height:'100%'},500, function(){
                     act=page;   
                     if(page == '#rappresentanti' && $('body').data('map_rappresentanti') != true){
                        initializeRappresentanti();
                        $('body').data('map_rappresentanti',true);
                     }else if(page == '#contact' && $('body').data('map_contatti') != true){
                        initializeContatti();
                        $('body').data('map_contatti',true);
                     }
                 }); 
             })
        } else {
                if(page == '#collezione')
                   $('#content').attr('style','width:100%; margin-left:0px');
                else
                   $('#content').attr('style','width:75%');
             $(page).css({display:'block'}).find('.box1').stop().animate({height:'100%'},500, function(){
                 act=page;
                 if(page == '#rappresentanti' && $('body').data('map_rappresentanti') != true){
                    initializeRappresentanti();
                    $('body').data('map_rappresentanti',true);
                 }else if(page == '#contact' && $('body').data('map_contatti') != true){
                    initializeContatti();
                    $('body').data('map_contatti',true);
                 }
             });     
        }
    }
    function close_page(page){
     $('#menu a').removeClass('active').find(' > span').stop().animate({opacity:'0'},600);
     Cufon.replace('#menu a', { fontFamily: 'Ubuntu', hover:true });
     //location.hash='';
     $(act).find('.box1').stop().animate({height:'0'},500, function(){
         $(act).css({display:'none'});
         act='';
         fl=true;
         $('#content').stop().animate({height:'668'})
     }); 
     return false;
    }
});


