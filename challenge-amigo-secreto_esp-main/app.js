const inputAmigo = document.getElementById("amigo");

const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
let listaAmigos = [];
function agregarAmigo() {

    if (inputAmigo.value === "") {
        alert("La casilla no puede estar vacia, ingresa NOMBRE.");
        return limpiarCaja();
        };

    // El nombre no debe tener números.//
    const regexNumero = /\d/;
    if (regexNumero.test(inputAmigo.value)) {
        alert("Tu nombre NO puede tener números, elige otro.");
        return limpiarCaja();
    };

    // El nombre no debe tener signos//
    const regexSigno = /[^a-zA-Z\sñÑáéíóúÁÉÍÓÚ]/;
    if (regexSigno.test(inputAmigo.value)) {
        alert("Tu nombre NO puede tener signos especiales, elige otro.");
        return limpiarCaja();
    };

    const nombres = inputAmigo.value.trim();
    if (listaAmigos.includes(nombres)) {
        alert ("Este nombre ya existe,agrega una distinción");
        return limpiarCaja();
    };

    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${listaAmigos.value}</li>`;

  limpiarCaja();
  actualizarListaAmigos();
};

function actualizarListaAmigos() {
  ulListaAmigos.innerHTML = "";
  for (let i = 0; i < listaAmigos.length; i++) {
  ulListaAmigos.innerHTML += `<li>${listaAmigos[i]}</li>`;
  }
};

function limpiarCaja() {
  document.getElementById("amigo").value = "";
};

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert("Necesitas al menos 2 amigos para iniciar el sorteo");
    return; };

  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];
  ulResultado.innerHTML = `<p>Tu amigo secreto es ${amigoSecreto}</p>`
   ulListaAmigos.innerHTML = "";
  listaAmigos = [];
};


    function reiniciarJuego() {
    listaAmigos = [];
    ulListaAmigos.innerHTML = "";
    ulResultado.innerHTML = "";
    ulListaAmigos.innerHTML = "";
    listaAmigos = [];
};