let start = document.getElementById("strt-btn");
let reset = document.getElementById("reset-btn");
let split = document.getElementById("split-btn");

let hours = 0;
let minutes = 0;
let second = 0;
let count = 0;
let timer = false;
let sno = 0;

start.addEventListener("click", function () {
  timer = true;
  let ele = document.getElementById("strt-btn").innerHTML;
  if (ele == "Start") {
    document.getElementById("strt-btn").innerHTML = "Stop";
    stopwatch();
  } else {
    timer = false;
    document.getElementById("strt-btn").innerHTML = "Start";
  }
});

reset.addEventListener("click", function () {
  timer = false;
  hours = 0;
  minutes = 0;
  second = 0;
  count = 0;
  document.getElementById("strt-btn").innerHTML = "Start";

  document.getElementById("hour").innerHTML = "00";
  document.getElementById("minute").innerHTML = "00";
  document.getElementById("second").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});

split.addEventListener("click", function () {
  if (timer) {
    sno++;
    let h = document.getElementById("hour").innerHTML;
    let m = document.getElementById("minute").innerHTML;
    let s = document.getElementById("second").innerHTML;
    let cstr = document.getElementById("count").innerHTML;

    let parent = document.getElementsByClassName("splits-div")[0];

    let splitDiv = document.createElement("div");
    splitDiv.className = "splits";

    let serialNo = document.createElement("span");
    serialNo.id = "serial-no";
    serialNo.textContent = sno;

    let interval = document.createElement("span");
    interval.id = "interval";
    interval.textContent = "Split At ";
    let splitTime = document.createElement("span");
    splitTime.id = "split-time";
    splitTime.textContent = `${h}:${m}:${s}:${cstr}`;

    splitDiv.appendChild(serialNo);
    splitDiv.appendChild(interval);
    splitDiv.appendChild(splitTime);

    // Append the new div to the parent element
    parent.appendChild(splitDiv);
  }
});

function stopwatch() {
  if (timer) {
    count++;
    if (count == 100) {
      second++;

      count = 0;
    }
    if (second == 60) {
      minutes++;
      second = 0;
    }
    if (minutes == 60) {
      hours++;
      console.log(minutes);
      second = 0;
      minutes = 0;
    }

    let h = hours;
    let m = minutes;
    let s = second;
    let cstr = count;

    if (hours < 10) {
      h = "0" + h;
    }

    if (minutes < 10) {
      m = "0" + m;
    }

    if (second < 10) {
      s = "0" + s;
    }

    if (count < 10) {
      cstr = "0" + cstr;
    }

    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
    document.getElementById("count").innerHTML = cstr;
    setTimeout(stopwatch, 10);
  }
}
