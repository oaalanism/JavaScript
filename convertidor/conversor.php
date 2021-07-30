<html>
    <?php
        $servername = "localhost";
        $username = "oalanism";
        $password = "0SkoM_bRM";
        $dbname = "convertidor";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        echo "Connected successfully";
    ?> 
    <head> 
        <meta charset="UTF-8">
        <title> Conversor </title>
        <link rel="stylesheet" href="css/convertidor.css">
        <script type="text/javascript" src="js/convertidor.js"></script>
        <script type="text/javascript" src="js/options.js"> </script>
        <script type="text/javascript" src="js/selectWrapper.js"></script>        
    </head>
    <body>
        <div class="convertidor">
            
            <div class="div-importe"> 
                <div class="div-importe-top">
                    <label class="label-importe"> Importe: </label> 
                </div>
                <div class="div-importe-bottom">
                    <input id = "importe" class="importe">
                    <div class="voltear" onclick="voltear()"> 
                        <div class="flecha-bucle cuerpo"></div>
                        <div class="flecha-bucle cabeza superior"></div>
                        <div class="flecha-bucle cabeza inferior"></div>
                    </div>
                </div>
                <hr>
            </div>
            <div class="info-divisas">
                <div id="div-divisa-origen" class="info-divisa"> 
                   <div class="select-wrapper">
                        <div class="select">
                            <div class="select__trigger">
                                <img id="img-divisa-origen" class="logo-divisa" src="image/US.png"> 
                                <label id="label-divisa-origen" name="US" class="name-divisa"> US / Dolar Americano </label>
                                <input id="valor-divisa-origen" value="1" class="valor-divisa" hidden>
                                <div class="select-arrow"></div>
                            </div>
                            <div class="options">
                                <?php 
                                ?>
                                
                            </div>
                        </div>
                    </div>

                </div> 
                
                <div id="div-divisa-tranformar" class="info-divisa">  
                
                    <div class="select-wrapper">
                        <div class="select">
                            <div class="select__trigger">
                                <img id="img-divisa-transformar" class="logo-divisa" src=""> 
                                <label id="label-divisa-transformar" class="name-divisa" name=""> </label>
                                <input id="valor-divisa-transformar" class="valor-divisa" value="" hidden>
                                <div class="select-arrow"></div>
                            </div>
                            <div class="options">

                            </div>
                            
                        </div>
                    </div>
                </div> 
            </div>
            <div class="div-convertir"> <button class="button-convert" onclick="convert()"> convertir </button> </div>
            <div class="div-resultado">
                <label id = "resultado" class="label-resultado"> 0 US = 0 EUR</label>
            </div>
        </div>
    </body>
</html>