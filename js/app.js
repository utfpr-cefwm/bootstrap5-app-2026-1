const form = document.querySelector("#form-cor");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const caixa = document.querySelector("#input-cor");
  document.body.style.backgroundColor = caixa.value;

});
