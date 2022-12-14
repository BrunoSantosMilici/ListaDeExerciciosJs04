// Ler  um  valor  e  escrever  a  mensagem  É  MAIOR  QUE  10!  se  o  valor  lido  for  maior  que  10,  caso contrário escrever NÃO É MAIOR QUE 10! //

function Valor(){
    var Valor = parseInt(prompt("Digite um número"))

    if (Valor>10) {
        alert("É MAIOR QUE 10!")
    }
    else {
        alert("É MENOR QUE 10!")
    }
}