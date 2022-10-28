const endTime = new Date("2023-04-25 23:09:23").getTime();

const day = document.querySelector(".d");
const hour = document.querySelector(".h");
const minutes = document.querySelector(".m");
const seconds = document.querySelector(".s");

setInterval(() => {
  const nowTime = new Date().getTime();
  const time = endTime - nowTime;
  let days = Math.floor(
    endTime / (24 * 60 * 60 * 1000) - nowTime / (24 * 60 * 60 * 1000)
  );

  let hours =
    Math.floor(endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24;

  let minute = Math.floor(endTime / (60 * 1000) - nowTime / (60 * 1000)) % 60;

  let second = Math.floor(endTime / 1000 - nowTime / 1000) % 60;

  day.textContent = days < 10 ? `0${days}` : days;
  hour.textContent = hours < 10 ? `0${hours}` : hours;
  minutes.textContent = minute < 10 ? `0${minute}` : minute;
  seconds.textContent = second < 10 ? `0${second}` : second;
}, 1000);
