const form = document.querySelector("#form-cor");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const caixa = document.querySelector("#input-cor");
  document.body.style.backgroundColor = caixa.value;

});

const promiseResponse = fetch("http://localhost:3000/users", {
  method: "GET",
});
promiseResponse.then(function(response) {
  const promiseJson = response.json();
  console.log("Promessa do corpo da response", promiseJson);
  promiseJson.then(function(json) {
    console.log("Corpo da response", json);
    console.log(json["Usuário"]);
    const data = new Date(json["Data Atual"]);
    console.log(data);
    console.log(data.getTime());
    console.log(Math.max(3, 7, 10));
    console.log(Math.min(3, 7, 10));
    console.log(Math.floor(1.1));
    console.log(Math.ceil(1.1));
    console.log(Math.round(1.1));
    console.log(Math.round(1.6));
    console.log(11 % 3);
  });
  console.log("... decodificando corpo da resposta");
});
console.log("...disparou requisição");
