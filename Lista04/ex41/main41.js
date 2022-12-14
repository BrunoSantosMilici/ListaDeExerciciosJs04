function calc(){
let ano_nas = parseInt(document.getElementById("ano_nas").value);
let ano_trab = parseInt(document.getElementById("anotrab").value);
const ano = new Date();

const idade = ano.getFullYear() - ano_nas;

if (idade>=65 || ano_trab >= 30 || (idade>=60 && ano_trab>=25)) {
    document.write("Requer aposentadoria");
} else {
    document.write("Não requer aposentadoria");
    }

}