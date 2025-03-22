// Lấy phần tử canvas và context
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// Thiết lập kích thước canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Danh sách chứa các ngôi sao và hành tinh
const stars = [];
const planets = [];

// Lớp Star
class Star {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

    this.draw();
  }
}

// Lớp Planet
class Planet {
  constructor(orbitRadius, size, color, speed) {
    this.orbitRadius = orbitRadius;
    this.size = size;
    this.color = color;
    this.speed = speed;
    this.angle = Math.random() * Math.PI * 2;
  }

  draw(centerX, centerY) {
    const x = centerX + this.orbitRadius * Math.cos(this.angle);
    const y = centerY + this.orbitRadius * Math.sin(this.angle);

    // Vẽ quỹ đạo
    ctx.beginPath();
    ctx.arc(centerX, centerY, this.orbitRadius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.stroke();

    // Vẽ hành tinh
    ctx.beginPath();
    ctx.arc(x, y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

    // Cập nhật góc quay
    this.angle += this.speed;
  }
}

// Tạo sao
function createStars() {
  const numStars = 150;
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 2 + 1;
    const speedX = (Math.random() - 0.5) * 0.5;
    const speedY = (Math.random() - 0.5) * 0.5;
    stars.push(new Star(x, y, radius, speedX, speedY));
  }
}

// Khởi tạo hệ mặt trời
function createPlanets() {
  planets.push(new Planet(50, 5, "red", 0.02));  // Sao Thủy
  planets.push(new Planet(100, 8, "orange", 0.015));  // Sao Kim
  planets.push(new Planet(150, 10, "blue", 0.01));  // Trái Đất
  planets.push(new Planet(200, 7, "brown", 0.008));  // Sao Hỏa
  planets.push(new Planet(300, 20, "yellow", 0.005));  // Sao Mộc
  planets.push(new Planet(400, 15, "lightblue", 0.003));  // Sao Thổ
}

// Vẽ và cập nhật sao và hành tinh
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Vẽ sao băng
  stars.forEach((star) => star.update());

  // Vẽ hệ mặt trời
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Vẽ mặt trời
  ctx.beginPath();
  ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();

  // Vẽ các hành tinh
  planets.forEach((planet) => planet.draw(centerX, centerY));

  requestAnimationFrame(animate);
}

// Khởi tạo và bắt đầu animation
createStars();
createPlanets();
animate();

// Khi thay đổi kích thước màn hình
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  stars.length = 0;
  createStars();
});
// tạo sự kiện onclick
var bruh = document.getElementById("bruh");
bruh.onclick = function() {
  window.location.href = 'index.html';
}