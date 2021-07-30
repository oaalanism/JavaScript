window.addEventListener('load', function(){
    const xhttp =  new XMLHttpRequest();
    xhttp.onload = function(){
        var arrayJSON = JSON.parse(this.response);
        document.getElementById("img-divisa-transformar").setAttribute("src", "image/"+arrayJSON[0].codigo_iso+".png");
        document.getElementById("label-divisa-transformar").setAttribute("name", arrayJSON[0].codigo_iso);
        document.getElementById("label-divisa-transformar").innerHTML = arrayJSON[0].nombre;
        document.getElementById("valor-divisa-transformar").setAttribute("value", arrayJSON[0].valor);

        document.getElementsByClassName("options")[0].innerHTML = "<div class=\"option-blank\"></div>";
        document.getElementsByClassName("options")[0].innerHTML += "<div class=\"option selected\"><img class=\"logo-divisa\" src=\"image/US.png\"><label name=\"US\" class=\"name-divisa\"> US / Dolar Americano </label> <input class=\"valor-divisa\" value=\"1\" hidden></div>";
        document.getElementsByClassName("options")[1].innerHTML = "<div class=\"option-blank\"></div>";
        document.getElementsByClassName("options")[1].innerHTML += "<div class=\"option none\"><img class=\"logo-divisa\" src=\"image/US.png\"><label name=\"US\" class=\"name-divisa\"> US / Dolar Americano </label> <input class=\"valor-divisa\" value=\"1\" hidden></div>";
        
        for(var i = 0 ; i < arrayJSON.length; i++){
            document.getElementsByClassName("options")[0].innerHTML += "<div class=\""+((i==0)?"option none":"option")+"\"> <img class=\"logo-divisa\" src=\"image/"+ arrayJSON[i].codigo_iso+".png\">  <label name=\""+arrayJSON[i].codigo_iso+"\" class=\"name-divisa\">"+arrayJSON[i].nombre+"</label> <input class=\"valor-divisa\" value=\""+arrayJSON[i].valor+"\" hidden></div>";
            document.getElementsByClassName("options")[1].innerHTML += "<div class=\""+((i==0)?"option selected":"option")+"\"> <img class=\"logo-divisa\" src=\"image/"+ arrayJSON[i].codigo_iso+".png\">  <label name=\""+arrayJSON[i].codigo_iso+"\" class=\"name-divisa\">"+arrayJSON[i].nombre+"</label> <input class=\"valor-divisa\" value=\""+arrayJSON[i].valor+"\" hidden> </div>";
        }
        
        document.getElementsByClassName("options")[0].innerHTML += "<div class=\"option-blank-bottom\"></div>";
        document.getElementsByClassName("options")[1].innerHTML += "<div class=\"option-blank-bottom\"></div>";

        document.getElementById("resultado").innerHTML = "0 US = 0 "+arrayJSON[0].codigo_iso;
    }

    xhttp.open("GET", "http://localhost:8080/divisas", false);
    xhttp.send();
})

