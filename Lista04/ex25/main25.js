function calc(){
    numero_conta = parseInt(document.getElementById("numero_conta").value);
    Saldo = parseFloat(document.getElementById("Saldo").value);
    Credito = parseFloat(document.getElementById("Credito").value);
    Debito = parseFloat(document.getElementById("Debito").value);

    Saldo_Total = Saldo - Debito + Credito

    if (Saldo_Total>=0) {
       document.write(`O seu saldo total é de ${Saldo_Total}R$`) 
    } else {
        document.write(`Aviso: Saldo Negativo de: ${Saldo_Total}R$`) 
    }

}