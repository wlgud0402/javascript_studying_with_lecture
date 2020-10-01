function start_game() {
  console.log("hello");
  position_setting();
}

function position_setting() {
  let top = Math.floor(Math.random() * 201) + 250;
  let right = Math.floor(Math.random() * 751) + 50;
}

const x = event.clientX;
const y = event.clientY;
console.log(x, y);

vertical.style.left = `${x}px`;
horizontal.style.top = `${y}px`;

target.style.left = `${x}px`;
target.style.top = `${y}px`;
