const totalDisplay = document.getElementById('total');
const coin = document.getElementById('coin');
const coinContainer = document.querySelector('.coin-container');
let total = 0;
coin.addEventListener('click', (e) => {
  const rect = coin.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;  

  createEffect(x, y);
  updateTotal(1); 
});

// Handle touch event
coin.addEventListener('touchstart', (e) => {
  e.preventDefault();
  const rect = coin.getBoundingClientRect();
  const touchCount = e.changedTouches.length;

  for (let i = 0; i < touchCount; i++) {
    const touch = e.changedTouches[i];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    createEffect(x, y);
  }

  updateTotal(touchCount);  // Update total based on number of touches
});

function createEffect(x, y) {
  const effect = document.createElement('div');
  effect.textContent = '+2';
  effect.classList.add('coin-effect');
  effect.style.left = `${x}px`;
  effect.style.top = `${y}px`;
  coinContainer.appendChild(effect);  

  setTimeout(() => {
    effect.remove();
  }, 3000);
}

function updateTotal(touchCount) {
  total += 2 * touchCount;
  totalDisplay.textContent = total;
}

function startCountdown(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
      hours = Math.floor(timer / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = timer % 60;
  
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = hours + ":" + minutes + ":" + seconds;
  
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  
  window.onload = function () {
    var twentyFourHours = 24 * 60 * 60,
        timers = document.querySelectorAll('.countdown-timer'); // Get all timers
  
    timers.forEach(function(timerElement) {
      startCountdown(twentyFourHours, timerElement);
    });
  };
  