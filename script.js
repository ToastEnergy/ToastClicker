let start, times;
let banner = document.querySelector('.banner-parent');
let startButton = document.getElementById('start');

startButton.addEventListener('click', startGame);
function startGame() {
  times = [];
  let toast = document.getElementById("toast");
  toast.style.display = "unset";
  banner.classList.add('hide');
  randomPos(toast);
};

function randomPos(item) {
  if (times.length >= 10) {
    item.style.display = "none";
    let time = document.getElementById("time");
    let bestTime = Math.min(...times);
    let avTime = (times.reduce((a, b) => a + b, 0)) / times.length;
    let best = document.createElement("p");
    best.innerText = `Best: ${Math.round(((bestTime / 1000) + Number.EPSILON) * 100) / 100
} seconds`;
    let average = document.createElement("p");
    average.innerText = `Average: ${Math.round(((avTime / 1000) + Number.EPSILON) * 100) / 100
} seconds`;
    time.appendChild(best);
    time.appendChild(average);
    banner.classList.remove('hide');
    return
  };
  if (start) {
    const millis = Date.now() - start;
    times.push(millis);
  }
  x = between(1, window.innerWidth-item.width-20);
  y = between(1, window.innerHeight-item.height-20);
  item.style.marginLeft = `${x}px`;
  item.style.marginTop = `${y}px`;
  start = Date.now();
};

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  );
};

window.onload = function() {
  let item = document.getElementById("toast");
  item.style.marginLeft = `${(window.innerWidth / 2) - (item.width / 2)}px`;
  item.style.marginTop = `${(window.innerHeight / 2) - (item.height / 2)}px`;
};
