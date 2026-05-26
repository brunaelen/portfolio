const canvas =
document.getElementById('particles');

const ctx =
canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for(let i = 0; i < 80; i++){

  particles.push({

    x:Math.random() * canvas.width,

    y:Math.random() * canvas.height,

    size:Math.random() * 3,

    speedX:(Math.random() - 0.5) * 0.5,

    speedY:(Math.random() - 0.5) * 0.5,

  });

}

function animateParticles(){

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  particles.forEach((particle) => {

    ctx.beginPath();

    ctx.arc(
      particle.x,
      particle.y,
      particle.size,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
    'rgba(138, 180, 255, 0.5)';

    ctx.fill();

    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if(
      particle.x < 0 ||
      particle.x > canvas.width
    ){
      particle.speedX *= -1;
    }

    if(
      particle.y < 0 ||
      particle.y > canvas.height
    ){
      particle.speedY *= -1;
    }

  });

  requestAnimationFrame(
    animateParticles
  );

}

animateParticles();

window.addEventListener(
  'resize',
  () => {

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

  }
);