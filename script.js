// Obtener referencias a los botones
const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const btnTijera = document.getElementById("tijera");
const btnLagarto = document.getElementById("lagarto");
const btnSpock = document.getElementById("spock");

// Opciones posibles
const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

const reglas = {
    piedra: ["tijera", "lagarto"],
    papel: ["piedra", "spock"],
    tijera: ["papel", "lagarto"],
    lagarto: ["papel", "spock"],
    spock: ["tijera", "piedra"]
};


// Función para obtener una elección aleatoria de la IA
function eleccionComputadora() {
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}

// Ganador
function determinarGanador(eleccionUsuario, eleccionCompu) {
    if (eleccionUsuario === eleccionCompu) {
        return 'Empate';

    }else if (reglas[eleccionUsuario].includes(eleccionCompu)) {
        return 'Ganaste';

    }else {
        return 'Perdiste';
 }
}






// Elección del usuario 
function jugar(eleccionUsuario) {
    const eleccionCompu = eleccionComputadora();
    const resultado = determinarGanador(eleccionUsuario, eleccionCompu);

    // Mostrar el resultado
    alert(`Tu elección: ${eleccionUsuario}\nElección de la IA: ${eleccionCompu}\nResultado: ${resultado}`);
}

// Asignar eventos a los botones 
btnPiedra.addEventListener("click", () => jugar('piedra'));
btnPapel.addEventListener("click", () => jugar('papel'));
btnTijera.addEventListener("click", () => jugar('tijera'));
btnLagarto.addEventListener("click", () => jugar('lagarto'));
btnSpock.addEventListener("click", () => jugar('spock'));