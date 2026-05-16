// Eventos de interesse vs. efeito:
// 1. Clique botão adicionar: faz aparecer uma linha nova de to-do list
// 2. Ligar o switch: faz com que desabilite o campo de texto da respectiva linha.
// 3. Desligar o switch: faz com que habilite o campo de texto da respectiva linha.
// 4. Clique botão excluir: faz com que exclua a respectiva linha.

const container = document.querySelector("#lista-tarefas");
const botaoAdicionar = document.querySelector("#botao-adicionar");
botaoAdicionar.addEventListener("click", adicionarLinha); // Referencia uma function nomeada.

function adicionarLinha() {
  const linhaNova = document.createElement("div");
  linhaNova.className = "row my-2";
  linhaNova.innerHTML = `
    <div class="col d-flex align-items-center">
      <input type="text" class="form-control" id="input-cor" placeholder="#ff0000">
      <div class="form-check form-switch fs-2">
        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
      </div>
      <button type="button" class="btn btn-danger order-2 order-md-1" id="botao-menos">
        <i class="bi bi-trash-fill"></i>
      </button>
    </div>
  `;
  container.appendChild(linhaNova); // Efetivamente cria o elemento.

  const switchEncerrado = linhaNova.querySelector("input[type='checkbox']");
  const inputTexto      = linhaNova.querySelector("input[type='text']");
  const botaoExcluir    = linhaNova.querySelector("button");
  switchEncerrado.addEventListener("change", function(event) {
    if(event.target.checked) {
      inputTexto.disabled = true;
    } else {
      inputTexto.disabled = false;
    }
  });
  botaoExcluir.addEventListener("click", function() {
    // container.removeChild(linhaNova);  // Também funciona!
    linhaNova.remove();
  });
}
