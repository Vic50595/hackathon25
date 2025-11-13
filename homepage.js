const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const illustration = document.querySelector('.illustration');

const vh = window.innerHeight;
const horizontalDistance = 37; // vw

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // PHASE 1: horizontal movement (first screen)
  const horizontalProgress = Math.min(scrollY / vh, 1);
  left.style.transform = `translateX(${horizontalProgress * horizontalDistance}vw)`;
  right.style.transform = `translateX(-${horizontalProgress * horizontalDistance}vw)`;
  illustration.style.transform = `translateY(-${horizontalProgress * 100}px)`;
  illustration.style.opacity = 1 - horizontalProgress;

  // PHASE 2: vertical scroll (container moves up and disappears)
  if (horizontalProgress === 1) {
    const verticalScroll = scrollY - vh;
    container.style.transform = `translateY(-${verticalScroll}px)`;
  }
});

// Compteur depuis le 20 oct à 9h 
function updateCounter() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const unequalPayDay = new Date(currentYear, 9, 20, 9, 0, 0); // 20 octobre à 9h

  const counterElement = document.getElementById('pay-gap-counter');
  
  let diffTime = Math.abs(today - unequalPayDay);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

  if (today >= unequalPayDay) {
    counterElement.innerHTML = `Depuis <strong>${diffDays} jours</strong>, <strong>${diffHours} heures</strong> et <strong>${diffMinutes} minutes</strong>, vous travaillez peut-être gratuitement.`;
  } else {
    counterElement.innerHTML = `Dans <strong>${diffDays} jours</strong>, <strong>${diffHours} heures</strong> et <strong>${diffMinutes} minutes</strong>, vous travaillerez peut-être gratuitement.`;
  }
}

// Mise à jour en temps réel chaque minute
updateCounter();
setInterval(updateCounter, 60 * 1000);