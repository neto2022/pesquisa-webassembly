let numeroval;

let numero = document.getElementById("calcular");

numero.addEventListener("click", () => {
  numeroval = BigInt(document.getElementById("calcularval").value);
  console.log("Calculando..." + numeroval);
});
export default {numeroval};