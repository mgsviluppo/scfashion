function initializeContatti() {
    var latlng = new google.maps.LatLng(42.924252,13.425293);
    // imposta le opzioni di visualizzazione
    var options = { zoom: 6,
                    center: latlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                  };

    // crea l'oggetto mappa
    var map = new google.maps.Map(document.getElementById('map'), options);
    
}

function initializeRappresentanti() {
    var rappresentanti = loadRappresentanti('rappresentanti.xml');

    var latlng = new google.maps.LatLng(42.924252,13.425293);
    // imposta le opzioni di visualizzazione
    var options = { zoom: 6,
                    center: latlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                  };

    // crea l'oggetto mappa
    var map2 = new google.maps.Map(document.getElementById('map2'), options);
    
    var myInfoWindow = []
    for (var i=0;i<rappresentanti.length;i++){
         addRappresentante(myInfoWindow, map2, rappresentanti[i])
    }
}


function loadRappresentanti(dname){
     var rappresentanti = []
     $.ajax({
         type: "GET",
         async: false,
         url: "rappresentanti.xml",
         dataType: "xml",
         success: function(xml) {
             rappresentanti = xml.childNodes.item().childNodes
         }
     });
     return rappresentanti
 }

function addRappresentante(myInfoWindow, map, rappresentante){
     
     lat = 0;
     lng = 0;

     var input_address = rappresentante.attributes["indirizzo"].textContent;  
     var geocoder = new google.maps.Geocoder();  
     geocoder.geocode( { address: input_address }, function(results, status) {  
         if (status == google.maps.GeocoderStatus.OK) {  
             lat = results[0].geometry.location.lat();  
             lng = results[0].geometry.location.lng();  

             // fornisce latitudine e longitudine
             var latlng = new google.maps.LatLng(lat,lng);
             
             var marker = new google.maps.Marker({ position: latlng,
                                                   map: map, 
                                                   title: 'Rappresentante' });
             
             var indirizzo = rappresentante.attributes["indirizzo"].textContent;
             var regione = rappresentante.attributes["regione"].textContent;
             var nominativo = rappresentante.attributes["nominativo"].textContent;
             var telefono = rappresentante.attributes["telefono"].textContent;
             var cell = rappresentante.attributes["cell"].textContent;
             var fax = rappresentante.attributes["fax"].textContent;
             var email = rappresentante.attributes["email"].textContent;
             
             var infowindow = new google.maps.InfoWindow({
                    content: '<div style="color:gray;font-size:16pt;font-weight:bold">Info rappresentante</div><ul style="text-align:left">'+
                            '<li><b>Nominativo</b>: '+nominativo+'</li>'+
                            '<li><b>Regione</b>: '+regione+'</li>'+
                            '<li><b>Indirizzo</b>: '+indirizzo+'</li>'+
                            '<li><b>Telefono</b>: '+telefono+'</li>'+
                            '<li><b>Cellulare</b>: '+cell+'</li>'+
                            '<li><b>Fax</b>: '+fax+'</li>'+
                            '<li><b>Email</b>: '+email+'</li>'+
                            '</ul>'});
            myInfoWindow.push(infowindow);
            google.maps.event.addListener(marker, 'click', function() {
                                                                 myInfoWindow.forEach(function(m){
                                                                    m.close(); 
                                                                 });
                                                                 infowindow.open(map,marker);
                                                             });
         }else {  
             console.log("Google Maps not found address!");  
             }  
         });
 }


$(document).ready(function() {
    $.vegas.defaults = {
        background:{
            'loading':false,
            'preload':true
        }
    }
    $.vegas('slideshow', {
        backgrounds:[
            { src:'images/bg1.jpg', fade:1000 },
            { src:'images/bg2.jpg', fade:1000 },
            { src:'images/bg3.jpg', fade:1000 }
        ],
        delay:10000,
        preload:true
    })('overlay', {
        src:'images/overlays/06.png',
        opacity:0.7
    });
    
    
    
    $('.button1 span, .tabs .nav li a span, .lightbox-image span ').css({opacity:'0'})
    $('.tabs .nav .selected a span').css({opacity:'1'})
    
    $('.button1').hover(function(){
        $(this).find('span').stop().animate({opacity:'1'})                          
    }, function(){
        $(this).find('span').stop().animate({opacity:'0'})                          
    })
    
    $('.lightbox-image').hover(function(){
        $(this).find('span').stop().animate({opacity:'0.4'})                            
    }, function(){
        $(this).find('span').stop().animate({opacity:'0'})                          
    })
    
    $('.tabs .nav li a').hover(function(){
        $(this).find('span').stop().animate({opacity:'1'})                          
    }, function(){
        if (!$(this).parent().hasClass('selected')) {
            $(this).find('span').stop().animate({opacity:'0'})                          
        }
    })
    
    //tabs
    tabs.init();
    
    // prettyPhoto
    $("a[rel^='prettyPhoto']").prettyPhoto({theme:'pp_default',allow_resize: true, deeplinking:false, social_tools:'', slideshow:3000, animation_speed:'normal'});
    

 });
 
