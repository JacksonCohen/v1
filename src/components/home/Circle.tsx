const colors = ['#e1e2ef', '#ebe9e9', '#232c33', '#ffa600', '#007cc6'];
const maxRadius = 40;

interface Mouse {
  x: number | undefined;
  y: number | undefined;
}

export default class Circle {
  c: CanvasRenderingContext2D;
  x: number;
  y: number;
  dx: number; // x velocity
  dy: number; // y velocity
  radius: number;
  minRadius: number;
  color: string;
  mouse: Mouse;

  constructor(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    dx: number,
    dy: number,
    radius: number,
    mouse: Mouse
  ) {
    this.c = context;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.mouse = mouse;
    this.minRadius = radius;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();
  }

  update() {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (
      this.mouse.x - this.x < 50 &&
      this.mouse.x - this.x > -50 &&
      this.mouse.y - this.y < 50 &&
      this.mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}
