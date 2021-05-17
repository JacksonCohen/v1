const colors = [
  'rgba(225, 226, 239, .66)',
  'rgba(235, 233, 233, .66)',
  'rgba(55, 56, 80, .66)',
  'rgba(35, 44, 51, .66)',
  'rgba(255, 166, 0, .66)',
  'rgba(0, 124, 198, .66)',
];
const trailLength = 8;

interface Velocity {
  dx: number;
  dy: number;
}

interface Coords {
  x: number | undefined;
  y: number | undefined;
}

export default class Circle {
  c: CanvasRenderingContext2D;
  position: Coords;
  velocity: Velocity;
  radius: number;
  minRadius: number;
  positions: Coords[];
  color: string;
  mouse: Coords;

  constructor(
    context: CanvasRenderingContext2D,
    position: Coords,
    velocity: Velocity,
    radius: number,
    mouse: Coords
  ) {
    this.c = context;
    this.position = position;
    this.velocity = velocity;
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
    this.c.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();

    this.storePosition(this.position.x, this.position.y);
  }

  update() {
    const { mouse, position, radius, velocity } = this;
    if (position.x + radius > window.innerWidth || position.x - radius < 0) {
      velocity.dx = -velocity.dx;
    }
    if (position.y + radius > window.innerHeight || position.y - radius < 0) {
      velocity.dy = -velocity.dy;
    }

    position.x += velocity.dx;
    position.y += velocity.dy;

    if (
      mouse.x - position.x < 100 &&
      mouse.x - position.x > -100 &&
      mouse.y - position.y < 100 &&
      mouse.y - position.y > -100
    ) {
      velocity.dx = -velocity.dx;
      velocity.dy = -velocity.dy;
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
