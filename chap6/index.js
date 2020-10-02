function start_game() {
  let score = document.querySelector(".score");
  start_bgm();
  position_setting();
}

function position_setting() {
  for (let i = 1; i < 11; i++) {
    // 벌레 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    let top = Math.floor(Math.random() * 201 + 250);
    let right = Math.floor(Math.random() * 751 + 525);

    let bug_img = document.createElement("img");

    bug_img.setAttribute("src", "img/bug.png");
    bug_img.style.position = "absolute";
    bug_img.style.top = `${top}px`;
    bug_img.style.right = `${right}px`;

    bug_img.classList.add("bug");
    bug_img.addEventListener("click", bug_pull);
    document.body.appendChild(bug_img);

    // 당근 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    let c_top = Math.floor(Math.random() * 201 + 250);
    let c_right = Math.floor(Math.random() * 751 + 525);

    let carrot_img = document.createElement("img");

    carrot_img.setAttribute("src", "img/carrot.png");
    carrot_img.style.position = "absolute";
    carrot_img.style.top = `${c_top}px`;
    carrot_img.style.right = `${c_right}px`;

    carrot_img.classList.add("carrot");
    carrot_img.addEventListener("click", carrot_pull);
    document.body.appendChild(carrot_img);
  }
}

const bug_pull_sound = new Audio("sound/bug_pull.mp3");
function bug_pull() {
  console.log("당근");
  bug_pull_sound.play();
  // bug_pull_sound.pause();
}

const carrot_pull_sound = new Audio("sound/carrot_pull.mp3");
function carrot_pull() {
  console.log("당근");
  carrot_pull_sound.play();
  let target = event.target;
  target.style.display = "none";
  // carrot_pull_sound.pause();
}

const bgm = new Audio("sound/bg.mp3");
function start_bgm() {
  bgm.play();
}
