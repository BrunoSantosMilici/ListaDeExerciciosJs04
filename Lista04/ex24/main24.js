function calc(){
    Salario_Fixo = parseFloat(document.getElementById("Salario_Fixo").value);
    Valor_vendas = parseFloat(document.getElementById("Valor_vendas").value);

    if (Valor_vendas<=1500){
        Acres = (Valor_vendas * 3) / 100
    } else {
        Acres = ((Valor_vendas * 3) / 100) + (5 * (Valor_vendas - 1500)) / 100
    }
   
    Salario_Total = Salario_Fixo + Acres

    document.write(`O salário total é de ${Salario_Total}R$`)
}