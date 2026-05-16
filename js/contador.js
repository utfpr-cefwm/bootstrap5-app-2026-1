const botaoMais = document.querySelector("#botao-mais");
const botaoMenos = document.querySelector("#botao-menos");
const output = document.querySelector("output");

function fnTratadora(dif) {
  const valor = +output.innerHTML;  // Converte de string para number.
  output.innerHTML = valor + dif;
}

botaoMais.addEventListener("click", () => fnTratadora(+1) );
botaoMenos.addEventListener("click", () => fnTratadora(-1) );
