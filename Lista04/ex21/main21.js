function calc(){
   
    start = parseFloat(document.getElementById("start").value);
    fim = parseFloat(document.getElementById("fim").value);

    duracao = fim - start 
    
    if (duracao<=0) {
        duracao = duracao + 24
       document.write(`A duração da partida foi de ${duracao} horas`) 
    } else {
        document.write(`A duração da partida foi de ${duracao} horas`)  
    }
    
}