function calc(){
    nota1 = parseFloat(document.getElementById("nota1").value);
    nota2 = parseFloat(document.getElementById("nota2").value);

    media = (nota1 + nota2)/ 2
    
    if (media>6) {
       document.write(`Sua média é ${media}` + "</br>") ;
       document.write("você foi aprovado");
    } else {
        document.write(`Sua média é ${media}`) ;
       document.write("você foi reprovado" + "</br>"); 
    }
}