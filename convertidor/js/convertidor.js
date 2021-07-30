function convert(){
    var origen = document.getElementById("label-divisa-origen").getAttribute("name");
    var transformar = document.getElementById("label-divisa-transformar").getAttribute("name");
    var importe = document.getElementById("importe").value;
    var valorOrigen = document.getElementById("valor-divisa-origen").getAttribute("value");
    var valorTransformar = document.getElementById("valor-divisa-transformar").getAttribute("value");
    var value;
    var resultado;

    if(!isNaN(importe))
    {
        const tasa = valorTransformar/valorOrigen;
        value = importe*tasa;
        resultado = importe + " "+ origen +" = " + value.toFixed(4) + " "+transformar;
        document.getElementById("resultado").innerHTML = resultado;
    }
    else
    {
        window.alert("Valor no es un numero");
    }
}

function voltear(){

    var nameOrigen = document.getElementById("label-divisa-origen").getAttribute("name");
    var nameTransformar = document.getElementById("label-divisa-transformar").getAttribute("name");

    var origNone = document.getElementById('div-divisa-origen').querySelector('.select-wrapper .options .option.none');
    var origSelected = document.getElementById('div-divisa-origen').querySelector('.select-wrapper .options .option.selected');
    origNone.classList.remove('none');
    origNone.classList.add('selected');
    origSelected.classList.remove('selected');
    origSelected.classList.add('none');
    
    var transNone = document.getElementById('div-divisa-tranformar').querySelector('.select-wrapper .options .option.none');
    var transSelected = document.getElementById('div-divisa-tranformar').querySelector('.select-wrapper .options .option.selected');
    transNone.classList.remove('none');
    transNone.classList.add('selected');
    transSelected.classList.remove('selected');
    transSelected.classList.add('none');

    document.getElementById('img-divisa-origen').setAttribute("src", "image/"+nameTransformar+".png");
    document.getElementById('label-divisa-origen').setAttribute('name', nameTransformar);
    document.getElementById('label-divisa-origen').innerHTML = transSelected.querySelector('.name-divisa').innerHTML;
    document.getElementById('valor-divisa-origen').setAttribute("value", transSelected.querySelector('.valor-divisa').getAttribute("value"));
    document.getElementById('img-divisa-transformar').setAttribute("src", "image/"+nameOrigen+".png");
    document.getElementById('label-divisa-transformar').setAttribute('name', nameOrigen);
    document.getElementById('label-divisa-transformar').innerHTML = origSelected.querySelector('.name-divisa').innerHTML;
    document.getElementById('valor-divisa-transformar').setAttribute("value", origSelected.querySelector('.valor-divisa').getAttribute("value"));
}