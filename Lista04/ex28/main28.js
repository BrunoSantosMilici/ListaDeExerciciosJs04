function calc(){
    Val1 = parseFloat(document.getElementById("Val1").value);
    Val2 = parseFloat(document.getElementById("Val2").value);
    Val3 = parseFloat(document.getElementById("Val3").value);

    if (Val1>Val2) {
        Maior = Val1
    } else {
        Maior = Val2
    }

    if (Val3>Maior) {
       document.write(`O maior valor é: ${Val3}`) 
    } else {
        document.write(`O maior valor é: ${Maior}`)  
    }
}