var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var valor = parseInt(document.getElementById('valor').value);
    var resultado = document.getElementById('resultado');
    if (valor == numeroSecreto) {
        resultado.innerHTML = `O número secreto é ${numeroSecreto}.\n Você acertou!!`;
    } 
    else if (valor > 10 || valor < 0) {
        resultado.innerHTML =" Digite um valor de 0 a 10!";
    }
    else {
        resultado.innerHTML = "Que pena. Você errou!!!"
    }
}
