const inputmetros = document.getElementById("metros");
const bnt = document.getElementById("btnConverter");
const saida = document.getElementById("saida");

bnt.addEventListener("click", () => {
const m = Number(inputmetros.value);

if (!inputmetros.value || Number.isNaN(m)) {
saida.textContent = "informe um número válido.";
return;
}

const cm = m * 100;
const mm = m * 1000;

  saida.textContent = `${m} m = ${cm} cm = ${mm} mm`;
});
