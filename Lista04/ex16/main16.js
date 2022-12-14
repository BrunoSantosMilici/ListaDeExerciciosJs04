function calc(){
    macas = parseInt(document.getElementById("macas").value);

    if (macas>=12) {
        preco = macas
    } else {
      preco = macas * 1.30  
    }

    document.write(`O valor da compra é de: ${preco}R$`)
}