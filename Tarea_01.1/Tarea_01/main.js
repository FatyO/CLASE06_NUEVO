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
        this.borderWidth = 3;
        this.fillColor = params.fillColor || "#6ec3e6";  
        this.radiusX = 15;  
        this.radiusY = 15;
        this.width = this.radiusX * 2;
        this.height = this.radiusY * 2;
        this.distanceX = 10; 
        this.distanceY = 10;  

        this.x = params.x || this.radiusX;
        this.y = params.y || this.radiusY;
    }

    draw() {
       
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;

      
        CTX.fillStyle = this.fillColor;

       
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, PI2);
        CTX.closePath();

       
        CTX.fill();

      
        CTX.stroke();
    }
}

let listaDeCirculos = [];


for (let x = 0; x < CANVAS.width; x += 2 * 15 + 10) { 
    for (let y = 0; y < CANVAS.height; y += 2 * 15 + 10) { 
        let nuevoCirculo = new Circulo({
            x: x + 20, 
            y: y + 20
        });
        listaDeCirculos.push(nuevoCirculo);
    }
}

function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    for (let i = 0; i < listaDeCirculos.length; i++) {
        listaDeCirculos[i].draw();
    }

    requestAnimationFrame(render);
}

window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);
