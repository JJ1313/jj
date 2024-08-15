/* ====== FUNCTIONS ======*/
function backgroundColor(clr = "#000"){
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = clr;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

class Ball {
  constructor({ x = 50, y = 50, r = 50, v = 5 } = {}) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.v = v;
    this.skinWidth = this.r / 20;
  }
  display() {
    ctx.beginPath();
    ctx.fillStyle = "#551122";
    ctx.strokeStyle = "#BBB";
    ctx.lineWidth = this.skinWidth;
    ctx.fill();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
  }
  move() {
    this.x += this.v;
  }
}
const canvas = document.getElementById("app");
const ctx = canvas.getContext("2d");

const FPS = 30;

let ball = new Ball({ x: 50, y: 50 });

const setup = () => {
  console.log("Welcome...");
  canvas.width = 800;
  canvas.height = 600;
}

const draw = () => {
  backgroundColor();
  ball.display();
  ball.move();
  console.info(`x: ${ball.x}, y: ${ball.y}\r`);
}

/* ======= MAIN ======*/
setup();

const intervalID = setInterval(draw, 1000 / FPS);
document.addEventListener("keydown", (e) => {
  const key = e.key;
  console.log(`Pressed: ${key}`);

  if (key == "Escape") {
    clearInterval(intervalID);
    console.log("The End");
  }
});
