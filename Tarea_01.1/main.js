var bottomEdgeOfLastCircle = 0;
var rightEdgeOfLastCircle = 0;

const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

class Circulo {
    constructor(params = {}) {
        this.borderColor = params.borderColor || "#6ec3e6";
        this.fillColor = "#6ec3e6";  // Siempre será verde cuando esté relleno
        this.borderWidth = 1;
        this.radiusX = 50;  // Tamaño de los círculos
        this.radiusY = 50;
        this.width = this.radiusX * 2;
        this.height = this.radiusY * 2;
        this.distanceX = 10;  // Espacio entre los círculos en horizontal
        this.distanceY = 10;  // Espacio entre los círculos en vertical

        this.x = params.x || this.radiusX;
        this.y = params.y || this.radiusY;
      
    }

    draw(fill) {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;

        CTX.beginPath();
        CTX.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, PI2);
        CTX.closePath();

        if (fill) {
            CTX.fillStyle = this.fillColor;  // Relleno con verde
            CTX.fill();  // Rellena el círculo
        }

        CTX.stroke();  // Dibuja el borde del círculo
    }
}

let listaDeCirculos = [];

// Lógica para crear círculos distribuidos tanto vertical como horizontalmente
for (let x = 0; x < CANVAS.width; x += 2 * 50 + 10) {  // Paso horizontal (2*radio + distancia)
    for (let y = 0; y < CANVAS.height; y += 2 * 50 + 10) {  // Paso vertical (2*radio + distancia)
        let nuevoCirculo = new Circulo({
            x: x + 50,  // Ajuste para centrar
            y: y + 50
        });
        listaDeCirculos.push(nuevoCirculo);
    }
}

function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    for (let i = 0; i < listaDeCirculos.length; i++) {
        let fillCircle = i % 2 === 0;  // Alterna: uno sí (verde), uno no
        listaDeCirculos[i].draw(fillCircle);
    }

    requestAnimationFrame(render);
}

window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);
