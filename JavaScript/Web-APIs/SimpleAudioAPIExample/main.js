// Creating Audio Context
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// Elements
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector("input");

// Creating Media Element Audio Source Node
const audioSource = audioCtx.createMediaElementSource(audioElement);

// Play/Pause Audio
playBtn.addEventListener("click", function () {
  // Check if context is in suspended state
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  if (this.getAttribute("class") === "paused") {
    audioElement.play();
    this.setAttribute("class", "playing");
    this.textContent = "Pause";
  } else if (this.getAttribute("class") === "playing") {
    audioElement.pause();
    this.setAttribute("class", "paused");
    this.textContent = "Play";
  }
});

// When Tack Ends
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});

// Creating Gain Node & Slider Event to Adjust Volume
const gainNode = audioCtx.createGain();
volumeSlider.addEventListener("input", function () {
  gainNode.gain.value = this.value;
});

// Connecting Different Nodes Together
audioSource.connect(gainNode).connect(audioCtx.destination);
