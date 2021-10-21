function calcular() {
    var n1 = parseFloat((document.getElementById("nota1")).value);
    var n2 = parseFloat((document.getElementById("nota2")).value);
    var n3 = parseFloat((document.getElementById("nota3")).value);
    var n4 = parseFloat((document.getElementById("nota4")).value);

   var result = parseFloat((n1 + n2 + n3 + n4) / 4);
   
   document.getElementById("campo").setAttribute('value', result);
   
   if (result >= 7) {
       alert(`PARABÉNS!! Sua média foi ${result}.\n Você foi APROVADO`)
   } else {
       alert(`SINTO MUITO!! Sua nota foi ${result}.\n Você foi reprovado`)
   }

}