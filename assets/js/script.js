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

    const currentCep = getCleanCep();

    if (currentCep.length !== 8) {
      inputCep.value = "";
      inputCep.placeholder = "CEP inválido (digite 8 números)";
      inputCep.style.border = "4px solid #e74c3c";
      return;
    }
  });

  inputCep.addEventListener("input", () => {
    inputCep.style.border = "";
    inputCep.placeholder = "Digite seu CEP";
  });
})();
