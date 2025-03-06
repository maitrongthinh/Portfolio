// Lấy phần tử canvas và context
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

// Hàm khởi tạo kích thước canvas
function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
initCanvas();
window.addEventListener('resize', () => {
  initCanvas();
  initParticles();
});

// Định nghĩa lớp Particle (hạt)
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    // Đảo hướng khi chạm biên
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Khởi tạo mảng particles
function initParticles() {
  particlesArray = [];
  let numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000);
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}
initParticles();

// Hàm vẽ và cập nhật hiệu ứng particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let particle of particlesArray) {
    particle.update();
    particle.draw();
  }
  requestAnimationFrame(animate);
}
animate();
