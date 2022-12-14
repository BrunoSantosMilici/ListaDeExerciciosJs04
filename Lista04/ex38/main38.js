function cad(){
codigo = parseInt(document.getElementById("codigo").value);
senha = parseFloat(document.getElementById("senha").value);

if (codigo != 1234) {
    document.write("Usuário inválido");
} else {
    if (senha != 9999) {
        document.write("Senha incorreta");
    } else {
        document.write("Acesso permitido");
    }
}
}