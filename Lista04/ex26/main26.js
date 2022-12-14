function calc(){
    estAT = parseInt(document.getElementById("estAT").value);
    qtMax = parseInt(document.getElementById("qtMax").value);
    qtMin = parseInt(document.getElementById("qtMin").value);

    qtMed = (qtMax + qtMin) / 2
    if (qtMed <= estAT) {
        document.write("Não efetuar a compra");
    } else {
        document.write("Efetuar compra");
    }
}