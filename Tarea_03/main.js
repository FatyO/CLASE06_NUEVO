window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const mainCircleRadius = 250; // Radio del círculo principal
    const speedFactor = 0.2;  // Factor global de velocidad para que todo sea más lento
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
            speed: (Math.random() * 2 - 1) * 0.01, // Velocidad de movimiento más lenta
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
        ctx.strokeStyle = "rgba(0, 150, 255, 0.5)";
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

            // Crecer o encoger el círculo de forma más lenta
            if (circle.growing) {
                circle.radius += 0.1 * speedFactor;  // Crecimiento más lento
            } else {
                circle.radius -= 0.1 * speedFactor;
            }

            // Rotar los círculos alrededor del centro más lentamente
            circle.angle += circle.speed * speedFactor;
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
