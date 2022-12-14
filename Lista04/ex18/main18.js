function calc(){
    nascimento = parseInt(document.getElementById("nascimento").value);
    ano = parseInt(document.getElementById("ano").value);

    idade = ano - nascimento

    if (idade>16) {
       document.write("Você pode votar") 
    } else {
        document.write("Você não pode votar")   
    }
}