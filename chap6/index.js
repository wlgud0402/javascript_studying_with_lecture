let score = document.querySelector(".score");
let now_score = 10;

let time = document.querySelector(".time");
let num = 10;

function timer() {
  num--;
  document.querySelector(".time").innerText = "00:" + num;
  // $('.time').attr('value',num);//숫자 카운트 표시
  if (num == 0) {
    clearInterval(interval); //num이 10이 되면 타이머를 해제
    if (now_score != 0) {
      alert("패배");
    } else {
      alert("이겼다!");
    }
  }
}

function start_game() {
  document.querySelector(".score").innerText = 10;
  document.querySelector(".time").innerText = "00:" + 10;
  start_bgm();
  position_setting();
  interval = setInterval("timer()", 1000); //간격 1초로 반복 타이머 설정
  let start_btn = document.querySelector(".start_btn");
  start_btn.style.display = "none";
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
  bug_pull_sound.play();
  bgm.pause();

  alert("벌레뽑았데요~~ 패배!");
}

const carrot_pull_sound = new Audio("sound/carrot_pull.mp3");
const game_win_sound = new Audio("sound/game_win.mp3");
function carrot_pull() {
  console.log("당근");
  carrot_pull_sound.play();
  let target = event.target;
  target.style.display = "none";
  now_score -= 1;
  document.querySelector(".score").innerText = now_score;

  if (now_score == 0) {
    // clearInterval(interval);
    bgm.pause();
    game_win_sound.play();
    alert("이겼따");
  }
}

const bgm = new Audio("sound/bg.mp3");
function start_bgm() {
  bgm.play();
}
