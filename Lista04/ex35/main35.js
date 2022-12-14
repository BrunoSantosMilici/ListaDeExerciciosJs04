function calc(){
    quant = parseFloat(document.getElementById("quant").value);
    tipo = String(document.getElementById("tipo").value);

    
        if (tipo == ("A")) {
            if (quant <= 20) {
                desconto = 0.03 * (quant * 2.90)
                total = (quant * 2.90) - desconto
                document.write("O valor a ser pago é de R$" + total)
            } else {
               desconto = 0.05 * (quant * 2.90)
               total = (quant * 2.90) - desconto
               document.write("O valor a ser pago é de R$" + total) 
            }  
        } else {
            if (quant <= 20) {
                desconto = 0.04 * (quant * 3.30)
                total = (quant * 3.30) - desconto
                document.write("O valor a ser pago é de R$" + total)
            } else {
                desconto = 0.06 * (quant * 3.30)
                total = (quant * 3.30) - desconto
                document.write("O valor a ser pago é de R$" + total)
            }
        }      
     }
        
        

