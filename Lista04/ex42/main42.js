function calc(){
    lado1 =  parseFloat(document.getElementById("lado1").value);
    lado2 =  parseFloat(document.getElementById("lado2").value);
    lado3 =  parseFloat(document.getElementById("lado3").value);

    if (lado1 < lado2 + lado3 && lado2 < lado3 + lado1 && lado3 < lado1 + lado2) {
        if (lado1 == lado2 && lado3 == lado2) {
            document.write("Triângulo Equilátero.")
        } else {
            if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
              document.write("Triângulo isósceles")  
            } else {
                document.write("Triângulo escaleno") 
            }
        }
    } else {
        document.write("Não é um triângulo")  
    }
}