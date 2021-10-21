function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito);
    } else {
        console.error("Endereço de filme inválido")
    }
    filmeFavorito = "";
}

function listarFilmesNaTela (filme) {
    var listaFilmes = document.querySelector("#listaFilmes")
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}