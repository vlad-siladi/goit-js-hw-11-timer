class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      minutes: document.querySelector('[data-value="mins"]'),
      seconds: document.querySelector('[data-value="secs"]'),
    }),
      (this.selector = selector);
    this.id = null;
    this.startDate = null;
    this.targetDate = targetDate;
  }

  calc = () => {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.refs.days.textContent = days < 10 ? `0${days}` : days;
    this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.refs.minutes.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.seconds.textContent = secs < 10 ? `0${secs}` : secs;
  };

  timerStart = () => {
    this.startDate = Date.now();
    this.id = setInterval(this.calc, 1000);

  
  };
}

const backTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2022"),
});

window.addEventListener("DOMContentLoaded", backTimer.timerStart);
  const countdownText = `До даты ${backTimer.targetDate} осталось:`;

    document
      .querySelector(".timer")
      .insertAdjacentHTML("beforebegin", countdownText);