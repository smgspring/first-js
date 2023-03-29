const clockTitle = document.querySelector(".js-clock");

function dDayClock() {
  const cmasday = new Date("2023-12-25");
  const now = new Date();
  const dDay = cmasday - now;

  const day = String(Math.floor(dDay / (1000 * 60 * 60 * 24)));
  const hour = String(Math.floor((dDay / (1000 * 60 * 60)) % 24));
  const minute = String(Math.floor((dDay / (1000 * 60)) % 60));
  const second = String(Math.floor((dDay / 1000) % 60));

  clockTitle.innerText = `${day.padStart(2, "0")}d ${hour.padStart(
    2,
    "0"
  )}h ${minute.padStart(2, "0")}m ${second.padStart(2, "0")}s`;
}
dDayClock();
setInterval(dDayClock, 1000);
