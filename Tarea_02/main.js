const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let currentShape = 'star';  
let currentColor = 'red';  

function updateCanvasSize() {
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
}

window.addEventListener("resize", updateCanvasSize);


function setShape(shape) {
    currentShape = shape;
    render();  
}


function setColor(color) {
    if (color === 'random') {
        currentColor = getRandomColor();
    } else {
        currentColor = color;
    }
    render();  
}


function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
}


class Estrella {
    constructor(params = {}) {
        this.borderColor = currentColor;
        this.borderWidth = 3;
        this.fillColor = currentColor;
        this.radius = 15;
        this.x = params.x || this.radius;
        this.y = params.y || this.radius;
    }

    draw() {
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = this.borderWidth;
        ctx.fillStyle = this.fillColor;
        this.drawStar(this.x, this.y, 5, this.radius, this.radius / 2);
        ctx.stroke();
    }

    drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fill();
    }
}


function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}


function drawSquare(x, y, size) {
    ctx.beginPath();
    ctx.rect(x - size / 2, y - size / 2, size, size);
    ctx.fill();
}


function drawTriangle(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y - size / 2);
    ctx.lineTo(x - size / 2, y + size / 2);
    ctx.lineTo(x + size / 2, y + size / 2);
    ctx.closePath();
    ctx.fill();
}

let shapesList = [];


function createShapes() {
    shapesList = [];
    for (let x = 0; x < canvas.width; x += 50) {  
        for (let y = 0; y < canvas.height; y += 50) { 
            shapesList.push({ x: x + 25, y: y + 25 });
        }
    }
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    shapesList.forEach((shape) => {
        ctx.fillStyle = currentColor;
        switch (currentShape) {
            case 'circle':
                drawCircle(shape.x, shape.y, 20);
                break;
            case 'square':
                drawSquare(shape.x, shape.y, 40);
                break;
            case 'triangle':
                drawTriangle(shape.x, shape.y, 40);
                break;
            case 'star':
                let estrella = new Estrella({ x: shape.x, y: shape.y });
                estrella.draw();
                break;
        }
    });

    requestAnimationFrame(render);
}

createShapes();
render();
