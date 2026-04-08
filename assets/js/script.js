(() => {
  const form = document.querySelector(".form");
  const inputCep = document.getElementById("cepInput");
  const btn = document.querySelector(".btn");

  const campos = {
    logradouro: document.getElementById("logradouro"),
    estado: document.getElementById("estado"),
    uf: document.getElementById("uf"),
    bairro: document.getElementById("bairro"),
    regiao: document.getElementById("regiao"),
    localidade: document.getElementById("localidade"),
  };

  function getCleanCep() {
    return inputCep.value.replace(/\D/g, "");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
})();
