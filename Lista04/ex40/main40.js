function calc(){
let nota1 = parseFloat(document.getElementById("nota1").value);
let nota2 = parseFloat(document.getElementById("nota2").value);
let nota3 = parseFloat(document.getElementById("nota3").value);
let notaEx = parseFloat(document.getElementById("notaEx").value);

const aproveitamento = ((nota1 + nota2 * 2 + nota3 * 3 + notaEx) / 7);

if (aproveitamento>=9) {
    conceito = ("A");
    document.write("O seu conceito é " + conceito)
} else {
        if (aproveitamento >= 7.5 && aproveitamento < 9.0){ 
            conceito = ("B");
            document.write("O seu conceito é " + conceito)
        } else {
                if (aproveitamento >= 6 && aproveitamento < 7.5) {
                        conceito = ("C");
                        document.write("O seu conceito é " + conceito)
                } else {
                        if (aproveitamento < 6) {
                             conceito = ("D");
                             document.write("O seu conceito é " + conceito)
                        }
                }
        }    
}
;
}