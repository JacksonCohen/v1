const colors = [
  'rgba(225, 226, 239, .66)',
  'rgba(235, 233, 233, .66)',
  'rgba(55, 56, 80, .66)',
  'rgba(35, 44, 51, .66)',
  'rgba(255, 166, 0, .66)',
  'rgba(0, 124, 198, .66)',
];
const trailLength = 8;

interface Coords {
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
  positions: Coords[];
  color: string;
  mouse: Coords;

  constructor(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    dx: number,
    dy: number,
    radius: number,
    mouse: Coords
  ) {
    this.c = context;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.mouse = mouse;
    this.minRadius = radius;
    this.positions = [];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw(ratio?) {
    let color = this.color.split(', ');
    for (let i = 0; i < this.positions.length; i++) {
      const ratio = (i + 1) / this.positions.length;
      color[color.length - 1] = ratio + ')';
      this.c.beginPath();
      this.c.arc(this.positions[i].x, this.positions[i].y, 5, 0, Math.PI * 2, false);
      this.c.fillStyle = color.join(', ');
      this.c.fill();
    }

    this.c.beginPath();
    this.c.arc(this.x, this.y, 5, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();

    this.storePosition(this.x, this.y);
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
      this.mouse.x - this.x < 100 &&
      this.mouse.x - this.x > -100 &&
      this.mouse.y - this.y < 100 &&
      this.mouse.y - this.y > -100
    ) {
      this.dx = -this.dx;
      this.dy = -this.dy;
    }

    this.draw();
  }

  storePosition(x: number, y: number) {
    this.positions.push({ x, y });

    if (this.positions.length > trailLength) {
      this.positions.shift();
    }
  }
}
