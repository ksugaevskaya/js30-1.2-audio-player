const playButton = document.getElementById("play-button");
const stopButton = document.getElementById("stop-button");
const forwardButton = document.getElementById("forward-button");
const backwardButton = document.getElementById("backward-button");
const song = document.getElementById("song");

const playButtonClicked = () => {
  console.log("Play Button clicked!");
  playButton.className = "hidden";
  stopButton.className = "music-buttons";
  song.currentTime = 0;
  song.play();
};

const stopButtonClicked = () => {
  console.log("Stop Button clicked!");
  stopButton.className = "hidden";
  playButton.className = "music-buttons";
  song.pause();
};

const forwardButtonClicked = () => {
  console.log("Forward Button clicked!");
};

const backwardButtonClicked = () => {
  console.log("Backward Button clicked!");
};

playButton.addEventListener("click", playButtonClicked);
stopButton.addEventListener("click", stopButtonClicked);
forwardButton.addEventListener("click", forwardButtonClicked);
backwardButton.addEventListener("click", backwardButtonClicked);
