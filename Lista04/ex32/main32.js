function calc(){

    time1 = String(document.getElementById("time1").value);
    time2 = String(document.getElementById("time2").value);

    gol1 = parseFloat(document.getElementById("gol1").value);
    gol2 = parseFloat(document.getElementById("gol2").value);

    if (gol1>gol2) {
        document.write(`${time1} VENCEU A PARTIDA COM ${gol1}`)
    } else  if (gol1<gol2) {
        document.write(`${time2} VENCEU A PARTIDA COM ${gol2}`)
    }

    if (gol1 == gol2) {
        document.write(`Houve um EMPATE`)
    }
}