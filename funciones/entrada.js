function Total() {
    //event.preventDefault()
    let entradaform = document.forms["form-entradas"]
    let menor = entradaform["cantmenor"].value
    let mayor = entradaform["cantmayor"].value
    let jubilado = entradaform["cantjubilados"].value
    let error = true
    let total = 0
    let total1 = 0
    let total2 = 0
    let total3 = 0

    if(isNaN(menor) || menor<0){
        document.getElementById("errormenor").textContent="Ingrese una cantidad de entradas en numeros"
       // document.getElementById("errormayor").textContent="Ingrese una cantidad de entradas en numeros"
        //document.getElementById("errorjubilado").textContent="Ingrese una cantidad de entradas en numeros"
        return false
    }
    if(isNaN(mayor) || mayor<0){
        document.getElementById("errormayor").textContent="Ingrese una cantidad de entradas en numeros"
        return false
    }
    if (isNaN(jubilado) || jubilado<0){
        document.getElementById("errorjubilado").textContent="Ingrese una cantidad de entradas en numeros"
        return false
    }

    if (menor == 0 && mayor == 0 && jubilado == 0) {
        document.getElementById("errormenor").textContent = "Ingrese una cantidad de entradas"
        document.getElementById("errormayor").textContent = "Ingrese una cantidad de entradas"
        document.getElementById("errorjubilado").textContent = "Ingrese una cantidad de entradas"
        return false

    }
/*
    try {
        if (isNaN(menor)) {
            throw new Error("Ingrese una cantidad de entradas en números");
        }
        if (isNaN(mayor)) {
            throw new Error("Ingrese una cantidad de entradas en números");
        }
        if (isNaN(jubilado)) {
            throw new Error("Ingrese una cantidad de entradas en números");
        }
    } catch (e) {
        document.getElementById("errormenor").textContent = e.message;
        document.getElementById("errormayor").textContent = e.message;
        document.getElementById("errorjubilado").textContent = e.message;
        error = false;
    }
*/
    
     
    
    if (menor > 0 || mayor > 0 || jubilado > 0) {
        document.getElementById("errormenor").textContent = ""
        document.getElementById("errormayor").textContent = ""
        document.getElementById("errorjubilado").textContent = ""
        total1 = 13000 * menor
        total2 = 16000 * mayor
        total3 = 13000 * jubilado
    }

    if (!error) {
        return error
    }

    total = total1 + total2 + total3
    //console.log(total)
    document.getElementById("pago").textContent = "Total a Pagar: " + total
    return error


}