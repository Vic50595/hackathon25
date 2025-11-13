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
