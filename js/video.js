const progress = document.getElementById("progress");
const timer = document.getElementById("timer");
button = document.getElementById("play");

function progressLoop() {
  setInterval(function () {
    progress.value = Math.round((video.currentTime / video.duration) * 100);
    timer.innerHTML = Math.round(video.currentTime) + " seconds";
  });
}

function playPause() {
  if (video.paused) {
    video.play();
    button.innerHTML = "&#10073;&#10073;";
  } else {
    video.pause();
    button.innerHTML = "►";
  }
}

button.addEventListener("click", playPause);
video.addEventListener("play", progressLoop);



Resources