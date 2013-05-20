
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
    
    function loadXMLDoc(dname)
    {
        var xml = ''
        $.ajax({
            type: "GET",
            async: false,
            url: "rappresentanti.xml",
            dataType: "xml",
            success: function(result) {
                xml = result;
            }
        });
        return xml
    }
    
    function initialize() {
        var xml = loadXMLDoc('rappresentanti.xml');

        debugger;
        lat = 0;
        lng = 0;
        var input_address = "Via achille grandi,3,ancona";  
        var geocoder = new google.maps.Geocoder();  
        geocoder.geocode( { address: input_address }, function(results, status) {  
            if (status == google.maps.GeocoderStatus.OK) {  
                lat = results[0].geometry.location.lat();  
                lng = results[0].geometry.location.lng();  

                // fornisce latitudine e longitudine
                var latlng = new google.maps.LatLng(lat,lng);
                
                var infowindow = new google.maps.InfoWindow({content: 'asdsadsa'});
                
                var marker = new google.maps.Marker({ position: latlng,
                                                      map: map, 
                                                      title: 'Questo è un testo di suggerimento' });
                google.maps.event.addListener(marker, 'click', function() {
                                                                    infowindow.open(map,marker);
                                                                });  
            }else {  
                alert("Google Maps not found address!");  
                }  
            });

            var latlng = new google.maps.LatLng(42.924252,13.425293);
            // imposta le opzioni di visualizzazione
            var options = { zoom: 6,
                            center: latlng,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                          };

            // crea l'oggetto mappa
            var map = new google.maps.Map(document.getElementById('map'), options);
            var map = new google.maps.Map(document.getElementById('map2'), options);

    }

    initialize();

 });