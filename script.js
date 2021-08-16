let start;
let times;

function startGame(button) {
  times = [];
  let item = document.getElementById("toast");
  item.style.display = "unset";
  button.style.display = "none";
  document.getElementById("time").innerText = "";
  randomPos(item);
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
    document.getElementById("start").style.display = "unset";
    console.log(times);
    return
  };
  if (start) {
    const millis = Date.now() - start;
    // document.getElementById("time").innerHTML = `${millis / 1000} seconds`;
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
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.getElementById("css").href = "mobile.css";
  };
  let item = document.getElementById("toast");
  item.style.marginLeft = `${(window.innerWidth / 2) - (item.width / 2)}px`;
  item.style.marginTop = `${(window.innerHeight / 2) - (item.height / 2)}px`;
};
