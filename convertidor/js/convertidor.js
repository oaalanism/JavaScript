const ep = 23.61;

function convert(){
    var origen = document.getElementById("label-divisa-origen").getAttribute("name");
    var importe = document.getElementById("importe").value;
    var value;
    var resultado;

    if(!isNaN(importe))
    {
        if(origen == "MXN")
        {
            value = importe/ep;
            resultado = importe + " MXN = " + value.toFixed(4) + " EUR";
        } 
        else
        {
            value = importe*ep;
            resultado = importe + " EUR = " + value.toFixed(4) + " MXN";
        } 
        document.getElementById("resultado").innerHTML = resultado;
    }
    else
    {
        window.alert("Valor no es un numero");
    }
}

function voltear(){
    var img_divisa_origen = document.getElementById("img-divisa-origen");
    var img_divisa_transformar = document.getElementById("img-divisa-transformar");
    var label_divisa_origen = document.getElementById("label-divisa-origen");
    var label_divisa_transformar = document.getElementById("label-divisa-transformar");

    var img = document.createElement("img");
    var label = document.createElement("label");
    img.setAttribute("src", img_divisa_origen.getAttribute("src"));
    label.setAttribute("name", label_divisa_origen.getAttribute("name"));
    label.innerHTML = label_divisa_origen.textContent;
    
    img_divisa_origen.setAttribute("src", img_divisa_transformar.getAttribute("src"));
    label_divisa_origen.setAttribute("name", label_divisa_transformar.getAttribute("name"));
    label_divisa_origen.innerHTML = label_divisa_transformar.textContent;

    img_divisa_transformar.setAttribute("src", img.getAttribute("src"));
    label_divisa_transformar.setAttribute("name", label.getAttribute("name"));
    label_divisa_transformar.innerHTML = label.textContent;
}