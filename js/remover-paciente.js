var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener('dblclick', function (event) {

  event.target.parentNode.classList.add('fadeOut');

  setTimeout(function () {
    var alvoEvento = event.target;
    var paiAlvo = alvoEvento.parentNode;
    paiAlvo.remove();
  }, 700);
});