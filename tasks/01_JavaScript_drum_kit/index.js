const playOnPress = e => {
  const { keyCode } = e;
  const button = document.querySelector(`[data-key="${keyCode}"].key`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (button && audio) {
    button.classList.add("playing");
    // setTimeout(() => {
    //   button.classList.remove("playing");
    // }, 100);

    audio.currentTime = 0;
    audio.play();
  }
};

window.addEventListener("keydown", playOnPress);

const removePlayingClass = e => {
  e.propertyName === "transform" && e.target.classList.remove("playing");
};

document.querySelectorAll(".key").forEach(item => {
  item.addEventListener("transitionend", removePlayingClass);
});
