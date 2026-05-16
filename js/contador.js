const botaoMais = document.querySelector("#botao-mais");
const botaoMenos = document.querySelector("#botao-menos");
const output = document.querySelector("output");

function alertaCor(atual) {
    resetCor()
    if (atual > 0){
        output.classList.add('text-success')
    }
    if (atual < 0){
        output.classList.add('text-danger')
    }
}

function resetCor(){
    output.classList.remove('text-success')
    output.classList.remove('text-danger')
}

function fnTratadora(dif) {
  const valor = +output.innerHTML;  // Converte de string para number.
  output.innerHTML = valor + dif;

  alertaCor(valor + dif);

  // output.classList.replace("minha-classe-1", "minha-classe-2");

}

botaoMais.addEventListener("click", () => fnTratadora(+1) );
botaoMenos.addEventListener("click", () => fnTratadora(-1) );
