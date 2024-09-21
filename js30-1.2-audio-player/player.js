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

let playNum = 0;

const updateSongInfo = () => {
  artwork.src = tracks[playNum].artwork;
  artist.innerHTML = tracks[playNum].artist;
  songTitle.innerHTML = tracks[playNum].songTitle;
  blurredBackgroundImage.style.backgroundImage = `url(${tracks[playNum].artwork})`;
};

const playButtonClicked = () => {
  console.log("Play Button clicked!");
  playButton.className = "hidden";
  stopButton.className = "music-buttons";
  song.src = tracks[playNum].song;
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
  playNum++;
  if (playNum > tracks.length - 1) {
    playNum = 0;
  }
  updateSongInfo();
  console.log("Forward Button clicked!");
};

const backwardButtonClicked = () => {
  playNum--;
  if (playNum < 0) {
    playNum = tracks.length - 1;
  }
  updateSongInfo();
  console.log("Backward Button clicked!");
};

playButton.addEventListener("click", playButtonClicked);
stopButton.addEventListener("click", stopButtonClicked);
forwardButton.addEventListener("click", forwardButtonClicked);
backwardButton.addEventListener("click", backwardButtonClicked);
