function calc(){
    
    nome = (document.getElementById("nome").value);
    sexo = (document.getElementById("sexo"));
    altura = parseFloat(document.getElementById("altura").value);

    if (sexo = "M") {
       peso_ideal = (72.7 * altura) - 58 
    } if (sexo="F") {
        peso_ideal = (62.1 * altura) - 44.7
    } else {
        alert("Por favor, digite M ou F em 'Sexo")
    }
    
    document.write(`${nome}, o seu peso ideal é: ${peso_ideal}Kg`)

}