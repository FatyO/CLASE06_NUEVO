window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const mainCircleRadius = 250;
    const speedFactor = 0.2; 
    let circles = [];

    
    for (let i = 0; i < 10; i++) {
        let radius = Math.random() * 20 + 10; 
        let angle = Math.random() * Math.PI * 2; 
        let distance = Math.random() * (mainCircleRadius - radius); 
        circles.push({
            radius: radius,
            x: centerX + Math.cos(angle) * distance,
            y: centerY + Math.sin(angle) * distance,
            speed: (Math.random() * 2 - 1) * 0.01, 
            growing: Math.random() > 0.5, 
            angle: angle,
            distance: distance
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        
        ctx.beginPath();
        ctx.arc(centerX, centerY, mainCircleRadius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 150, 255, 0.5)";
        ctx.lineWidth = 3;
        ctx.stroke();

        
        circles.forEach(circle => {
            
            if (circle.distance + circle.radius > mainCircleRadius) {
                circle.growing = false;
            } else if (circle.distance - circle.radius < 0) {
                circle.growing = true;
            }

            
            if (circle.growing) {
                circle.radius += 0.1 * speedFactor;  
            } else {
                circle.radius -= 0.1 * speedFactor;
            }

            
            circle.angle += circle.speed * speedFactor;
            circle.x = centerX + Math.cos(circle.angle) * circle.distance;
            circle.y = centerY + Math.sin(circle.angle) * circle.distance;

            
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
