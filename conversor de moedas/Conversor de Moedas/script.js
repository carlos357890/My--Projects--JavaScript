function Converter() {
     let Valor = document.getElementById("valor").value;
     let valoremDolar = parseFloat(Valor);
     let valorReal = valoremDolar * 5;
     let Convertido = `U$ ${Valor} é R$ ${valorReal}`;

     document.getElementById("valorConvertido").innerHTML = Convertido;
}