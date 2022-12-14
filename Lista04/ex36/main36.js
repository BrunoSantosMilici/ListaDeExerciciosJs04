function calc(){
Homem1 = parseInt(document.getElementById("Homem1").value);
Homem2 = parseInt(document.getElementById("Homem2").value);
Mulher1 = parseInt(document.getElementById("Mulher1").value);
Mulher2 = parseInt(document.getElementById("Mulher2").value);

if (Mulher1 < Mulher2) {
    armazem = Mulher1
    Mulher1 = Mulher2
    Mulher2 = armazem
}

if (Homem1 < Homem2) {
    armazem = Homem1
    Homem1 = Homem2
    Homem2 = Homem1
}

soma = Homem1 + Mulher2
produto = Mulher1 / Homem2
document.write("A soma das idades do homem mais velho e da mulher mais nova é " + soma)
document.write("</br>")
document.write("O produto das idades do homem mais novo e da mulher mais velha é " + produto)
}