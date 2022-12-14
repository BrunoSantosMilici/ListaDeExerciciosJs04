function calc(){
    Valor1 = parseFloat(document.getElementById("Valor1").value);
    Valor2 = parseFloat(document.getElementById("Valor2").value);

    if (Valor1>Valor2) {
        document.write(`O menor valor é ${Valor2}` + "</br>");
        document.write(`O maior valor é ${Valor1}` + "</br>");
    } else {
        document.write(`O menor valor é ${Valor1}` + "</br>");
        document.write(`O maior valor é ${Valor2}` + "</br>");
    }}