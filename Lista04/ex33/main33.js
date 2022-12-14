function calc(){

    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);

    if (n1 == n2) {
        document.write("Os números são iguais")
    } else if (n1>n2) {
        document.write("O primeiro número é maior")
    } else {
        document.write("O segundo número é maior")
    }

}