let noCount = 0;
const maxFotos = 8;
const fotos = [
    "imagenes/1.jpeg", "imagenes/2.jpeg", "imagenes/3.jpeg", "imagenes/4.jpeg",
    "imagenes/5.jpeg", "imagenes/6.jpeg", "imagenes/7.jpeg", "imagenes/8.jpeg",
];
const mensajes = [
    "Lo siento por lo que pasó, realmente me duele haberte lastimado con mis actitudes.",
    "Recuerdo los momentos felices que compartimos y quiero recuperarlos.",
    "Te extraño cada día, eres una parte importante de mi vida.",
    "Lamento no haber valorado lo que teníamos en su momento, arreglemos lo nuestro.",
    "Cada recuerdo contigo me hace darme cuenta de cuánto te quiero.",
    "Entiendo que cometí errores, y quiero aprender de ellos, dame la oportunidad por favor.",
    "Deseo poder reconstruir nuestra historia juntos, ¿aceptas?.",
    "Todos los días deseo que me des otra oportunidad."
];

let mensajeInicialMostrado = false;

function mostrarMensaje() {
    document.getElementById("inicio").style.display = "none"; 
    document.getElementById("mensaje").style.display = "block"; 
}

function perdonar() {
    ocultarTodo();
    document.getElementById("agradecimiento").style.display = "block"; 

    const numero = "51945649449"; 
    const mensaje = "Hola Bryan, Quiero hablar contigo."; 
    const encodedMessage = encodeURIComponent(mensaje); 
    const whatsappLink = `https://wa.me/${numero}?text=${encodedMessage}`; 

    document.getElementById("whatsapp-link").href = whatsappLink; 
}

function noPerdonar() {
    ocultarTodo(); 

    if (!mensajeInicialMostrado) {
        mostrarMensajeInicial();
        mensajeInicialMostrado = true;
    } else {
        if (noCount < maxFotos) {
            mostrarImagen();
        } else {
            noCount = 0;  // Reiniciar el contador si se llega al máximo
            mostrarImagen(); 
        }
        noCount++;
    }
}

function mostrarMensajeInicial() {
    const mensajeInicialContainer = document.createElement("div");
    mensajeInicialContainer.id = "mensaje-inicial";
    mensajeInicialContainer.innerHTML = `
        <h2>Te pido perdón de corazón, por favor piensalo un poquito más china</h2>
        <button onclick="continuarCiclo()">Tengo una foto...</button>
    `;
    document.body.appendChild(mensajeInicialContainer);

    const audio = document.getElementById("audio-perdon");
    audio.play().catch(error => console.error("Error al reproducir el audio:", error));
}

function continuarCiclo() {
    document.getElementById("mensaje-inicial").remove(); 
    noPerdonar(); 
}

function mostrarImagen() {
    document.getElementById("imagen-container").style.display = "block"; 
    document.getElementById("imagen").src = fotos[noCount % maxFotos]; 
    document.getElementById("mensaje-imagen").innerText = mensajes[noCount % maxFotos]; 
}

function ocultarTodo() {
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("agradecimiento").style.display = "none";
    document.getElementById("imagen-container").style.display = "none";
}