window.onload = function() {  // Asegúrate de que el script cargue después del DOM
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const mainCircleRadius = 250; // Radio del círculo principal
    let circles = [];

    // Crear los círculos pequeños
    for (let i = 0; i < 10; i++) {
        let radius = Math.random() * 20 + 10; // Radio aleatorio entre 10 y 30
        let angle = Math.random() * Math.PI * 2; // Ángulo inicial aleatorio
        let distance = Math.random() * (mainCircleRadius - radius); // Distancia del centro
        circles.push({
            radius: radius,
            x: centerX + Math.cos(angle) * distance,
            y: centerY + Math.sin(angle) * distance,
            speed: (Math.random() * 2 - 1) * 0.05, // Velocidad de movimiento
            growing: Math.random() > 0.5, // Creciendo o disminuyendo
            angle: angle,
            distance: distance
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar círculo principal
        ctx.beginPath();
        ctx.arc(centerX, centerY, mainCircleRadius, 0, Math.PI * 2);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();

        // Dibujar y mover círculos pequeños
        circles.forEach(circle => {
            // Condicionales para evitar que los círculos salgan del círculo principal
            if (circle.distance + circle.radius > mainCircleRadius) {
                circle.growing = false;
            } else if (circle.distance - circle.radius < 0) {
                circle.growing = true;
            }

            // Crecer o encoger el círculo
            if (circle.growing) {
                circle.radius += 0.5;
            } else {
                circle.radius -= 0.5;
            }

            // Rotar los círculos alrededor del centro
            circle.angle += circle.speed;
            circle.x = centerX + Math.cos(circle.angle) * circle.distance;
            circle.y = centerY + Math.sin(circle.angle) * circle.distance;

            // Dibujar el círculo
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0, 150, 255, 0.5)";
            ctx.fill();
            ctx.stroke();
        });

        requestAnimationFrame(draw);
    }

    draw();
}
