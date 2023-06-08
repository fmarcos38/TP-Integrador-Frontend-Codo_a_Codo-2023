function calPrecioFinal(){

    console.log("ingreso a calcular precio");

    let precioEntrada = 200;

    let cantEntradas = document.getElementById("cantEntradas").value;
    console.log("cantEntradas:", cantEntradas);

    let porcDescuento = document.getElementById("porcDescuento").value;
    console.log("porcDescuento: ", porcDescuento);

    let descuento = ((cantEntradas*precioEntrada) * porcDescuento/100);
    console.log("descuento: " + descuento);

    
    let precioTotal = (cantEntradas*precioEntrada) - descuento;
    console.log("preciototal: " + precioTotal);

    
    // modificando dinámicamente el html para colocar el precio total en la pantalla
    document.getElementById("valorTotal").value = precioTotal;

}