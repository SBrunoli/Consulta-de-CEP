(() => {
  const form = document.querySelector(".form");
  const inputCep = document.getElementById("cepInput");
  const btn = document.querySelector(".btn");

  const fields = {
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

  function showError(message, color) {
    inputCep.value = "";
    inputCep.placeholder = message;
    inputCep.style.border = `4px solid ${color}`;
  }

  async function getInfos(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.erro) {
        showError("CEP não encontrado!", "#ff4500");
        return;
      }

      console.log(data);
    } catch (error) {
      showError("Erro na conexão!", "#7f8c8d");
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const currentCep = getCleanCep();

    if (currentCep.length !== 8) {
      showError("CEP Inválido! (Digite 8 números)", "#e74c3c");
      return;
    }

    getInfos(currentCep);
  });

  inputCep.addEventListener("input", () => {
    inputCep.style.border = "";
    inputCep.placeholder = "Digite seu CEP";
  });
})();
