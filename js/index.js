const $video = document.querySelector('#media-player');

const $backward = document.querySelector('#backward');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

$backward.addEventListener('click', handleBackward);
$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$forward.addEventListener('click', handleForward);

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleProgress);

function handleBackward() {
  $video.currentTime -= 2;
}

function handlePlay() {
  $play.hidden = true;
  $pause.hidden = false;
  $video.play();
}

function handlePause() {
  $pause.hidden = true;
  $play.hidden = false;
  $video.pause();
}

function handleForward() {
  $video.currentTime += 2;
}

function handleLoaded() {
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  if ($video.currentTime === $video.duration) {
    $pause.hidden = true;
    $play.hidden = false;
  }
  $progress.value = $video.currentTime;
}

function handleProgress() {
  $video.currentTime = $progress.value;
}
