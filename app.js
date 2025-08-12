
// Variable para almacenar los amigos en un array
let amigos = [];

// Función para agregar un amigo al array 
function agregarAmigo() {

  // Capturar el valor de entrada
  let nombre = document.getElementById("amigo").value.trim();

  // Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar el nombre capturado al array
  amigos.push(nombre);

  // Limpiar el campo de entrada
  document.getElementById("amigo").value = "";

  // Mostrar la lista actualizada
  mostrarAmigos();
}

// Función para mostrar todos los amigos en la lista HTML
function mostrarAmigos() {
  // Obtener el elemento de la lista
  let lista = document.getElementById("listaAmigos");

  // Limpiar lista antes de actualizar
  lista.innerHTML = "";

  // Recorrer el array amigos
  for (let i = 0; i < amigos.length; i++) {

    // Agregar cada amigo como elemento <li>
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {

  // Validar que haya amigos en la lista
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // Generar índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  document.getElementById("resultado").innerHTML =
    `El amigo sorteado es: <b>${amigoSorteado}</b>`;

 }
 // Función para reiniciar el juego
function reiniciarJuego() {
  amigos = []; // vaciar el array
  document.getElementById("listaAmigos").innerHTML = ""; // limpiar lista
  document.getElementById("resultado").innerHTML = ""; // limpiar resultado
  document.getElementById("amigo").value = ""; // limpiar input
}



