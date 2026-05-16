const botaoIniciar = document.querySelector("#botao-iniciar");
const botaoPausar = document.querySelector("#botao-pausar");
const botaoReiniciar = document.querySelector("#botao-reiniciar");

// Começa em "0" [ms]:
const output = document.querySelector("output");

function fnTratadora(dif) {
  const valor = +output.innerHTML;  // Converte de string para number.
  valorEmMs = valor * 1000;
  valorEmMs += dif;
  output.innerHTML = (valorEmMs / 1000).toFixed(2);
}


/*

Máquina de estados:

Estados possíveis:
- Parado    : a contagem não estará aumentando
- Executando: a contagem é automaticamente incrementada

Transições possíveis:
- Parado     →[botao-iniciar   ]→ Executando    {{            }}
- Parado     →[botao-reiniciar ]→ Parado        {{ output = 0 }}
- Executando →[botao-pausar    ]→ Parado        {{            }}
- Executando →[botao-reiniciar ]→ Parado        {{ output = 0 }}

*/

let estadoAtual = "Parado";
function executaMaquina(transicao) {
  switch (estadoAtual) {

    case "Parado":
      switch(transicao) {
        case "botao-iniciar":
          estadoAtual = "Executando";
          break;
        case "botao-reiniciar":
          estadoAtual = "Parado";
          output.innerHTML = "0";
          break;
      };
      break;

    case "Executando":
      switch(transicao) {
        case "botao-pausar":
          estadoAtual = "Parado";
          break;
        case "botao-reiniciar":
          estadoAtual = "Parado";
          output.innerHTML = "0";
          break;
      }

  }

  console.log(estadoAtual);
}

setInterval(
  () => {     // Primeiro parâmetro: função handler (callback function).
    if ("Executando" == estadoAtual) {
      fnTratadora(+50);
    }
  },
  50,         // Segundo parâmetro: quantidade de tempo do intervalo.
);

botaoIniciar.addEventListener("click", () => executaMaquina("botao-iniciar") );
botaoPausar.addEventListener("click", () => executaMaquina("botao-pausar") );
botaoReiniciar.addEventListener("click", () => executaMaquina("botao-reiniciar") );
