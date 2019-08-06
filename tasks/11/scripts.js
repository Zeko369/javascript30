const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const buttons = player.querySelectorAll('button')
const fullScreen = buttons[buttons.length - 1];

fullScreen.onclick = () => video.mozRequestFullScreen();

const togglePlay = (e) => {
  // Weird example
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();

  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

const updateButton = (e) => {
  const { paused } = e.target;
  toggle.textContent = paused ? '►' : '❚ ❚';
}

const skip = (e) => {
  const { skip } = e.target.dataset;
  video.currentTime += parseFloat(skip);
}

const handleRangeUpdate = (e) => {
  const { value, name } = e.target; 
  video[name] = value;
}

const handleProgress = (e) => {
  const precent = (video.currentTime / video.duration) * 100;
  console.log(precent);
  progressBar.style.flexBasis = `${precent}%`;
}

const scrub = (e) => {
  const scrubtTime = (e.offsetX / progress.offsetWidth) * video.duration;

  video.currentTime = scrubtTime;
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay)

skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => { mousedown = true; });
progress.addEventListener('mouseup', () => { mousedown = false; });
progress.addEventListener('mousemove', (e) => mosusedown && scrub(e));
