// Variables globales
let NumSecreto = 0;
let NumIntentos = 0;
let ListaNumerosSorteados=[];
let NumMX = 5;

function AsignarTextoElemento(elemento, texto) {
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
}

function verificarIntento() {
    let NumUsuario = parseInt(document.getElementById('ValorUsuario').value);
    
    if (NumUsuario === NumSecreto) {
        // Mensaje de éxito
        AsignarTextoElemento('p', `¡Correcto! Adivinaste el número en ${NumIntentos} ${NumIntentos == 1 ? 'intento' : 'intentos'}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (NumUsuario > NumSecreto) {
            AsignarTextoElemento('p', 'El número secreto es menor.');
        } else {
            AsignarTextoElemento('p', 'El número secreto es mayor.');
        }
        NumIntentos++; // Incrementamos el contador
        Limpiar();
    }
}

function Limpiar() {document.querySelector("#ValorUsuario").value = "";}

function generarNumeroSecreto() {
    let NumGenerado = Math.floor(Math.random() * NumMX) + 1;
    console.log(ListaNumerosSorteados);
    console.log(NumGenerado);

    if (ListaNumerosSorteados.length === NumMX) {
        AsignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
        return null; // Devolvemos null para indicar que el juego terminó
    }
    
     if (ListaNumerosSorteados.includes(NumGenerado)) {
        return generarNumeroSecreto(); // Recursividad: volvemos a llamar a la función
    } else {
        // Si el número no está en la lista, lo agregamos y lo retornamos
        ListaNumerosSorteados.push(NumGenerado);
        return NumGenerado;
    } 

}

function ReiniciarGame() {
    // 1. Limpiar la caja de texto
    Limpiar();
    // 2. Indicar mensaje de intervalo de números
    AsignarTextoElemento('p', `Indica un número del 1 al ${NumMX}`);
    AsignarTextoElemento("h1", 'Juego del Numero Secreto!')
    // 3. Generar el número aleatorio
    NumSecreto = generarNumeroSecreto();
    // 4. Reiniciar el número de intentos
    NumIntentos = 1;
    // 5. Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", 'true');
}

// LLAMADA A FUNCIONES
ReiniciarGame(); // Se llama a la función reiniciar para inicializar el juego