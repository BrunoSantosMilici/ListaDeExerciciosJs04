function calc(){
 let nome = (document.getElementById("nome").value);
 let preco = parseFloat(document.getElementById("preco").value);
 let quantidade = parseFloat(document.getElementById("quantidade").value);

total = quantidade *  preco 

if (quantidade <= 5) {
    desconto = total * 0.02
} else {
    if (quantidade > 5 && quantidade<=10) {
        desconto = total * 0.03
    } else {
        if (quantidade > 10) {
            desconto = total * 0.05
        }
    }
}

pagamento =  total - desconto

document.write("O preço a ser pago é " + pagamento + "R$")
}