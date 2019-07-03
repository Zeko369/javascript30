const getDeg = (value, range = 60) => (((value + 1) / range) * 360 + 90) % 360;

function setDate() {
  const now = new Date();
  const times = {
    second: now.getSeconds(),
    min: now.getMinutes(),
    hour: now.getHours()
  };

  Object.keys(times).forEach(item => {
    document.querySelector(`.${item}-hand`).style.transform = `rotate(${getDeg(
      times[item],
      item === "hour" ? 24 : 60
    )}deg)`;
  }); // could be done better [{name: 'hour', value: now.getHours()}]
}

setInterval(setDate, 1000);
