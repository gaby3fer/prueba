// Generar estrellas
const estrellasDiv = document.getElementById('estrellas');
for (let i = 0; i < 120; i++) {
    const estrella = document.createElement('div');
    estrella.className = 'estrella';
    const size = Math.random() * 3 + 1;
    estrella.style.width = size + 'px';
    estrella.style.height = size + 'px';
    estrella.style.left = Math.random() * 100 + '%';
    estrella.style.top = Math.random() * 70 + '%';
    estrella.style.animationDelay = Math.random() * 3 + 's';
    estrella.style.animationDuration = (Math.random() * 2 + 1) + 's';
    estrellasDiv.appendChild(estrella);
}

// Frases con sentimiento: "me gustas pero aún no somos nada"
const frases = [
    "🌙 No sé si la luna nos mira, pero yo solo puedo mirarte a ti. Me gustas, y es bonito aunque aún no sea nuestro.",
    "💫 Aún no somos nada, pero cada vez que te veo, siento que podría serlo todo. Ojalá algún día.",
    "✨ Me gustas tanto que hasta las estrellas se han dado cuenta. Solo falta que lo sepas tú.",
    "🌙 Este lirio nocturno es como lo que siento: florece en silencio, con la esperanza de que algún día lo veas.",
    "💖 No sé si esto llegará a algo, pero hoy, en este momento, solo quiero que sepas que me encantas.",
    "🌟 Todavía no somos un nosotros, pero cada latido mío tiene tu nombre en espera.",
    "🌙 La luna sabe lo que no me atrevo a decirte: que me gustas más de lo que puedo ocultar.",
    "💫 Ojalá el destino nos mire un día. Mientras tanto, me quedo con la ilusión de verte.",
    "✨ No pido nada más que una oportunidad. Una sonrisa tuya y ya tengo un mundo por descubrir.",
    "🌙 Sé que aún no es momento, que aún no somos nada. Pero por si acaso: me gustas. Mucho.",
    "💖 Hay personas que llegan sin avisar y de repente todo tiene sentido. Tú eres esa persona para mí.",
    "🌟 No sé si algún día me darás una oportunidad, pero quiero que sepas que hoy, por ti, vale la pena esperar.",
    "🌙 Me gusta cómo me haces sentir sin siquiera intentarlo. Y aunque no pase nada, ya valió la pena conocerte.",
    "💫 El amor no siempre es correspondido de inmediato. Pero el mío, aunque callado, es sincero.",
    "✨ Quisiera que la luna me prestara su luz para escribirte lo mucho que me importas. Pero me faltarían estrellas.",
    "🌙 No sé qué será de esto, pero lo que siento por ti es real. Y eso, aunque no seamos nada, ya es hermoso.",
    "💖 Si el destino nos permite encontrarnos de nuevo, prometo decirte todo lo que hoy guardo en silencio.",
    "🌟 Aún no somos un cuento de amor, pero ojalá algún día lo seamos. Mientras, cuido esta ilusión como un tesoro.",
    "🌙 Me gustas de una manera que no sé explicar. Solo sé que cuando apareces, la noche se vuelve más clara.",
    "💫 No exijo nada, no pido promesas. Solo que sepas que, sin ser nada tuyo, ya te llevo en mi corazón.",
    "🌙 A veces la luna me susurra tu nombre. Y yo sonrío, porque aunque no seas mío, me gusta soñar que algún día lo serás.",
    "✨ No necesito que sea ahora, solo quiero que sepas que existes en mis pensamientos más bonitos.",
    "💫 Si las estrellas pudieran hablar, le contarían al mundo lo mucho que me haces sentir. Pero por ahora, solo lo sabe la luna.",
    "🌙 Tal vez no sea el momento, tal vez nunca lo sea. Pero prefiero arriesgarme a decirte que me gustas, a quedarme con la duda."
];

const btn = document.getElementById('btnMensaje');
const mensajeTexto = document.getElementById('mensajeTexto');
let animando = false;

function cambiarMensaje(nuevoTexto) {
    if (animando) return;
    animando = true;
    
    mensajeTexto.style.opacity = '0';
    mensajeTexto.style.transform = 'translateY(8px)';
    
    setTimeout(() => {
        mensajeTexto.textContent = nuevoTexto;
        mensajeTexto.style.transition = 'all 0.35s ease';
        mensajeTexto.style.opacity = '1';
        mensajeTexto.style.transform = 'translateY(0)';
        animando = false;
    }, 200);
}

function fraseAleatoria() {
    return frases[Math.floor(Math.random() * frases.length)];
}

btn.addEventListener('click', () => {
    cambiarMensaje(fraseAleatoria());
    
    const icono = btn.querySelector('.fa-star');
    if (icono) {
        icono.style.transform = 'rotate(20deg) scale(1.2)';
        setTimeout(() => { icono.style.transform = ''; }, 300);
    }
    
    const centro = document.querySelector('.centro-flor');
    if (centro) {
        centro.style.transform = 'scale(1.15)';
        setTimeout(() => { centro.style.transform = ''; }, 200);
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        mensajeTexto.textContent = "🌙 La luna sabe lo que siento... y tú, ¿te imaginas?";
    }, 500);
});