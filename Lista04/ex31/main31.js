function calc(){

lado1 = parseFloat(document.getElementById("lado1").value);
lado2 = parseFloat(document.getElementById("lado2").value);
lado3 = parseFloat(document.getElementById("lado3").value);

if (lado1>lado2+lado3) {
    document.write("Não é um triângulo.")
} else {
 if (lado2>lado1 + lado3) {
    document.write("Não é um triângulo.")
 } else {
    if (lado3>lado1 + lado2) {
        document.write("Não é um triângulo.")
    } else {
        document.write(" é um triângulo.")
    }
 }   
}
}