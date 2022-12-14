function calc(){
    nota1 = parseFloat(document.getElementById("nota1").value);
    nota2 = parseFloat(document.getElementById("nota2").value);
    nota3 = parseFloat(document.getElementById("nota3").value);

    media = ((nota1)*2 + (nota2)*3 + (nota3) *5) / 10

    document.write(`A média final é:${media}`)

   
}