<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Navigare shoes - ScFashion</title>
        <meta charset="utf-8">
		<link rel="Shortcut Icon" href="images/liferay.ico">
        <link rel="stylesheet" href="css/reset.css" type="text/css" media="all">
        <link rel="stylesheet" href="css/layout.css" type="text/css" media="all">
        <link rel="stylesheet" href="css/prettyPhoto.css" type="text/css" media="all">
        <link rel="stylesheet" href="css/style.css" type="text/css" media="all">
        <link rel="stylesheet" href="css/jquery.vegas.css" type="text/css" media="all">
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script type="text/javascript" src="js/jquery-1.6.1.min.js" ></script>
        <script type="text/javascript" src="js/cufon-yui.js"></script>
        <script type="text/javascript" src="js/cufon-replace.js"></script>
        <script type="text/javascript" src="js/Ubuntu_400.font.js"></script>
        <script type="text/javascript" src="js/Ubuntu_700.font.js"></script>
        <script type="text/javascript" src="js/script.js" ></script>
        <script type="text/javascript" src="js/pages.js"></script>
        <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
        <script type="text/javascript" src="js/jquery.vegas.js"></script>
        <!--<script type="text/javascript" src="js/bg.js" ></script>
        <script type="text/javascript" src="js/bgSlider.js" ></script>-->
        
        <script type="text/javascript" src="js/tabs.js"></script>
        <script type="text/javascript" src="js/jquery.prettyPhoto.js"></script>
        <!--[if lt IE 9]>
            <script type="text/javascript" src="js/html5.js"></script>
        <![endif]-->
        <!--[if lt IE 7]>
            <div style='clear:both;text-align:center;position:relative'>
                <a href="http://www.microsoft.com/windows/internet-explorer/default.aspx?ocid=ie6_countdown_bannercode"><img src="http://storage.ie6countdown.com/assets/100/images/banners/warning_bar_0000_us.jpg" border="0"  alt="" /></a>
            </div>
        <![endif]-->
    </head>
    <body id="page1">
        <div class="spinner"></div>
        <!-- <div id="bgSlider"></div> -->
        <div class="extra">
            <div class="main">
                <div class="box">
<!-- header -->
                    <header>
                        <div id="logo" style="display:inline-block;float:left"></div>
                        <div style="float:left;margin-top:-80px">
                            <ul id="menu">
                                <li style="float:left;display:inline-block"><div class="button_menu_out"><div class="button_menu_in"><a class="menu_link" href="#home"><strong>Home Page</strong></div></div></a></li>
                                <li style="float:left;display:inline-block"><div class="button_menu_out"><div class="button_menu_in"><a class="menu_link" href="#collezione"><strong>Collezioni</strong></div></div></a></li>
                                <li style="float:left;display:inline-block"><div class="button_menu_out"><div class="button_menu_in"><a class="menu_link" href="#contact"><strong>Contatti</strong></div></div></a></li>
								<li style="float:left;display:inline-block"><div class="button_menu_out"><div class="button_menu_in"><a class="menu_link" href="#rappresentanti"><strong>Rappresentanti</strong></div></div></a></li>
                            </ul>
                        </div>
                    </header>
<!--content -->
                    <article id="content">
                        <ul>
                            <li id="home" style="bottom:none;height:400px">
                                <div class="box1_out">
									<div class="box1">
                                    	<div class="inner">
	                                        <h2>Mission</h2>
											<div style='background-image:url("images/img_homepage.jpg"); float:left; background-size:188px 114px; width:188px;height:114px; margin:10px; border:3px solid #001A3D;'></div>
	                                        <p style='line-height:7mm;'>Come testimonia il marchio rappresentato dalla vela sulle onde il mare è da sempre un elemento importante del mondo NAVIGARE. Il mare come sinonimo di 
												tranquillità e pace, ma allo stesso tempo sportività e dinamismo. Così l'abbigliamento Navigare è destinato alle persone che amano vestire in modo 
												elegante pur avendo a disposizione un prodotto sportivo adatto ad ogni situazione.
	                                        	Questo pensiero è stato trasmesso non solo all'abbigliamento maschile ma anche all' abbigliamento femminile e da bambino.
	                                        	Inoltre NAVIGARE ha firmato altri oggetti, per soddisfare tutti coloro che apprezzano la linea abbigliamento, desiderano crearsi un look completo Navigare,
	 											grazie a prodotti, con le stesse caratteristiche di qualità e design. Sono nati così l'intimo uomo, i profumi, la pelletteria, 
												gli ombrelli e gli articoli in spugna.
	                                        	Tutto questo unito con l'amore per il mare e per il tempo libero vissuto con stile ed eleganza in ogni momento rappresenta il MONDO NAVIGARE, 
												che da sempre non è solamente UN MODO DI VESTIRE... ma anche e sopratutto UN MODO DI ESSERE.</p>
	                                    	<div class="fraseUno">NAVIGARE</div>
											<div class="fraseDue">UN MODO DI ESSERE...</div>
											<div class="fraseTre">UN MODO DI VIVERE...</div>
										</div>
                                	</div>
								</div>
                            </li>
                            
                            <li id="collezione">
                                <div class="box1_out"><div class="box1">
                                    <div class="inner">
                                        <div class="wrapper tabs">
                                            <div class="col1">
                                                <h2>Collezioni</h2>
                                                <ul class="nav">
                                                    
                                                    <?php
                                                        $array_path = array();
                                                        $dir = "images/collezioni";
                                                        $dirs = scandir($dir);
                                                        $i = 0;
                                                        foreach($dirs as $entry){
                                                            if(strncmp($entry, '.', strlen('.'))){
                                                                if($i > 0)
                                                                    $class = '';
                                                                else
                                                                    $class = 'selected';
                                                                $array_path[$i] = array('id' => 'gallery_'.str_replace(" ", "_", $entry), 'path' => $dir.'/'.$entry, 'name' => $entry);
                                                                echo '<li class="'.$class.'"><a href="#gallery_'.str_replace(" ", "_", $entry).'"><span></span><strong>'.$entry.'</strong></a></li>';
                                                                $i++;
                                                            }
                                                        }
                                                    ?>
                                                </ul>
                                            </div>
                                            <div class="col3 pad_left1">
                                                <?php
                                                    include "classi_php/SmartImage.class.php";
                                                    $i = 0;
                                                    foreach($array_path as $collection){
                                                        $id = $collection['id'];
                                                        $path = $collection['path'];
                                                        $name = $collection['name'];
                                                
														if(!file_exists($path.'/thumb')){
															mkdir($path.'/thumb');
														}
        												echo '<div class="tab-content" id="'.$id.'">';
                                                        echo '<h2>'.$name.'</h2>';
                                                        echo '<div class="wrapper">';
                                                
                                                        $dir_photo = scandir($path.'/big');
                                                        
                                                        $xml_photo_description = simplexml_load_file($path."/photo_description.xml");
                                                        $description = "";
                                                        foreach($dir_photo as $photo){
                                                            if(strncmp($photo, '.', strlen('.'))){
                                                                echo '<div class="thumb-container" style="border:7px solid white">';
                                                                if(!file_exists($path.'/thumb/thumb_'.$photo)){
                                                                    $img = new SmartImage($path.'/big/'.$photo); 
                                                                    $img->resize(188, 114, true); 
                                                                    $img->saveImage($path.'/thumb/thumb_'.$photo); 
                                                                }
                                                                foreach($xml_photo_description->photo as $photo_xml){
                                                                    $description = "";
                                                                    $name_photo = $photo_xml->name;
                                                                    if($name_photo != ''){
                                                                        if($name_photo == explode('.',$photo)[0]){
                                                                            $description = $photo_xml->description;
                                                                            break;
                                                                        }
                                                                    }                                                                    
                                                                }
                       
                                                                echo '<a href="'.$path.'/big/'.$photo.'" class="lightbox-image" rel="prettyPhoto[group'.$i.']" title="'.$description.'"><span></span><img src="'.$path.'/thumb/thumb_'.$photo.'" alt=""></a>';
                                                                echo '</div>';
                                                            }
                                                        }
                                                        $i++;
                                                        echo '</div>';
                                                        echo '</div>';
                                                
                                                    }
                                                ?>
                                            </div>
											<div style='clear:both'></div>
                                        </div>
                                    </div>
                                </div></div>
                            </li>
                            <li id="contact">
                                <div class="box1_out"><div class="box1">
                                    <div class="inner">
                                        <div class="wrapper" height="600px">
                                            <div>
                                                <h2>Contatti</h2>
                                                <p>S.C. Fashion SAS di Stefano Cannizzaro</p>
                                                Via Achille Grandi 3, 60131 Ancona (AN)<br>
                                                <p class="cols">
                                                    Telefono:<br>
                                                    Fax:<br>
                                                    Email:
                                                </p>
                                                <p>
                                                    071-2917875<br>
                                                    +1 504 889 9898<br>
                                                    <a href="mailto:" class="link1">mail@stefanocannizzaro.com</a>
                                                </p>
                                            </div>
                                            <div style="display:block;">
                                                <h2>Mappa</h2>
                                                <div id="map" style="width:700px; height:500px"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                            </li>
                            <li id="rappresentanti">
                                <div class="box1_out"><div class="box1">
                                    <div class="inner">
                                        <div style="display:block;">
                                            <h2>Mappa Rivenditori</h2>
											
                                            <div id="map2" style="width:700px; height:600px"></div>
                                        </div>
                                    </div>
                                </div></div>
                            </li>
                        </ul>
                    </article>
<!-- / content -->
                </div>
            </div>
            <div class="block"></div>
        </div>
        <div class="bg1">
            <div class="main">
<!-- footer -->
                <footer>
                    <div class="col_1">
                        <a href="#home" id="footer_logo"></a> Copyright 2013
                    </div>
                    <div class="col_2">
                        <a rel="nofollow" href="#">Designed by MGSVILUPPO</a>
                        <!-- {%FOOTER_LINK} -->
                    </div>
                </footer>
<!-- / footer-->
            </div>
        </div>
        <script type="text/javascript"> Cufon.now(); </script>
        <script>
        $(window).load(function() {
            $('.spinner').fadeOut();
            $('body').css({overflow:'inherit'})
        })
        </script>
    </body>
</html>