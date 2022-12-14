function calc(){

    SalHoras = parseFloat(document.getElementById("SalHoras").value);
    HorasT = parseFloat(document.getElementById("HorasT").value);

    Horas_Adc = HorasT - 160
    Acres = ((SalHoras*50)/100) * Horas_Adc

    if (HorasT>160) {
        Total = (SalHoras * HorasT) + Acres
    } else {
        Total = SalHoras * HorasT
    };

    document.write(`O salário total é de ${Total}`)

};