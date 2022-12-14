function calc(){

    Val1 = parseFloat(document.getElementById("Val1").value);
    Val2 = parseFloat(document.getElementById("Val2").value);
    Val3 = parseFloat(document.getElementById("Val3").value);

    if (Val1<Val2) {
        prim = Val1
        seg = Val2
    } else {
       prim = Val2 
       seg = Val1
    }

    if (Val3<prim) {
       ter = seg
       seg = prim 
       prim = Val3 
    } else {
      if (Val3>seg) {
        ter = Val3
      } else {
        ter = segseg = Val3
      }  
    }

    document.write(`A ordem dos valores é ${prim}, ${seg} e ${ter}`)

}