const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");


setInterval(() => {
 
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  if (htime < 10) {
    hourElement.textContent = `0${htime}`;
  } else {
    hourElement.textContent = htime;
  }
  if (mtime < 10) {
    minuteElement.textContent = `0${mtime}`;
  } else {
    minuteElement.textContent = mtime;
  }if (stime < 10) {
    secondElement.textContent = `0${stime}`;
  } else {
    secondElement.textContent = stime;
  }
 
}, 1000);
