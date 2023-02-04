'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineWidth = 4;
const particlesArray = [];
const spawnX = (0, canvas.width);
const spawnY = (0, 0);

class Particles {
  constructor() {
    this.x = Math.random() * spawnX;
    this.y = Math.random() * spawnY;
    this.l = Math.random() * 25 + 15;

    this.speedX = Math.random() * 2;
    this.speedY = Math.random() * 15 + 10;
    this.color = 'white';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.l);
    ctx.stroke();
  }
}

function init() {
  for (let i = 0; i < 3; i++) {
    particlesArray.push(new Particles());
  }
}
init();

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  init();
  handleParticles();
  requestAnimationFrame(animate);
}
animate();
