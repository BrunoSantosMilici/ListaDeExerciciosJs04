// Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). //

function Valor(){
    var Valor = parseInt(prompt("Digite um valor:"));
    if (Valor>=0){
        alert("Este valor é positivo");
    }
    else{ 
    alert("Este valor é negativo");
    }
}