const campo = document.getElementById("campo-cor");

campo.addEventListener("keypress", function(evento) {
  if (evento.key === "Enter") {
    const cor = campo.value;
    executarCallback(() => mudarCor(cor));
  }
});

function executarCallback(callback) {
  callback();
}

function mudarCor(cor) {
  document.body.style.backgroundColor = cor;
}
