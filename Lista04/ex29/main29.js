function calc(){

    Val1 = parseFloat(document.getElementById("Val1").value);
    Val2 = parseFloat(document.getElementById("Val2").value);
    Val3 = parseFloat(document.getElementById("Val3").value);

    if (Val1>Val2) {
        mai1 = Val1
    } else {
        mai1 = Val2 
    }

    if (Val3>Val1) {
        mai2 = Val3
    } else if (Val3>Val2) {
        mai2 = Val3
    } else {
        mai2 = Val2
    }

    const soma = mai1 + mai2

    console.log(soma)
    document.write(`A soma dos dois maiores valores é igual a: ${soma}`);
}

