function calc(){

Numero = parseFloat(document.getElementById("Numero").value);

if (Numero>0) {
   document.write(`${Numero} é um valor POSITIVO`) 
} else if (Numero<0) {
    document.write(`${Numero} é um valor NEGATIVO`)  
} else {
    document.write(`O número é 0`) 
}

}