const playButton = document.getElementById("play-button");
const stopButton = document.getElementById("stop-button");
const forwardButton = document.getElementById("forward-button");
const backwardButton = document.getElementById("backward-button");
const song = document.getElementById("song");
const artwork = document.getElementById("artwork");
const artist = document.getElementById("artist");
const songTitle = document.getElementById("song-title");
const blurredBackgroundImage = document.getElementById(
  "blurred-background-image"
);
const endTime = document.getElementById("end-time");
const currentTime = document.getElementById("current-time");
const progress = document.getElementById("progress");

let playNum = 0;

const updateSongInfo = () => {
  artwork.src = tracks[playNum].artwork;
  artist.innerHTML = tracks[playNum].artist;
  songTitle.innerHTML = tracks[playNum].songTitle;
  blurredBackgroundImage.style.backgroundImage = `url(${tracks[playNum].artwork})`;
  song.src = tracks[playNum].song;
  endTime.innerHTML = tracks[playNum].duration;
};

const playButtonClicked = () => {
  console.log("Play Button clicked!");
  playButton.className = "hidden";
  stopButton.className = "music-buttons";
  song.play();
  artwork.className = "lemonade-image scale";
};

const stopButtonClicked = () => {
  console.log("Stop Button clicked!");
  stopButton.className = "hidden";
  playButton.className = "music-buttons";
  song.pause();
  artwork.className = "lemonade-image";
};

const forwardButtonClicked = () => {
  playNum++;
  if (playNum > tracks.length - 1) {
    playNum = 0;
  }
  updateSongInfo();
  song.currentTime = 0;
  playButtonClicked();

  console.log("Forward Button clicked!");
};

const backwardButtonClicked = () => {
  playNum--;
  if (playNum < 0) {
    playNum = tracks.length - 1;
  }
  updateSongInfo();
  song.currentTime = 0;
  playButtonClicked();
  console.log("Backward Button clicked!");
};

const progressUpdated = () => {
  song.currentTime = (progress.value * tracks[playNum].durationInSec) / 100;
};

playButton.addEventListener("click", playButtonClicked);
stopButton.addEventListener("click", stopButtonClicked);
forwardButton.addEventListener("click", forwardButtonClicked);
backwardButton.addEventListener("click", backwardButtonClicked);
progress.addEventListener("input", progressUpdated);

setInterval(() => {
  const seconds = Math.floor(song.currentTime % 60);
  currentTime.innerHTML = `${Math.floor(song.currentTime / 60)}:${
    seconds > 9 ? seconds : "0" + seconds
  }`;
  progress.value = (song.currentTime * 100) / tracks[playNum].durationInSec;
}, 1000);
