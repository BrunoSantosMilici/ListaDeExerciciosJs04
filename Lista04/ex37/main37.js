function calc(){
QuantMorango = parseFloat(document.getElementById("QuantMorango").value);
QuantMacas = parseFloat(document.getElementById("QuantMacas").value);

soma = QuantMorango + QuantMacas

if (QuantMorango <= 5) {
    precoMorango = QuantMorango * 2.50
} else {
    precoMorango = QuantMorango * 2.20
}

if (QuantMacas <= 5) {
    precoMacas = QuantMacas * 1.80  
} else {
    precoMacas = QuantMacas * 1.50
}
    valorT = precoMacas + precoMorango

    if (soma < 8 || valorT > 25){
        desconto = (0.10 * valorT)
        valorT = valorT - desconto
    }

    document.write("O valor total é: " + valorT + "R$")
}