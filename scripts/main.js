document.addEventListener('DOMContentLoaded', () => {
  /********************************
   * 1) DECORATION DOWNLOAD LOGIC
   ********************************/
  const decorationCells = document.querySelectorAll('.decoration-cell');
  
  decorationCells.forEach(cell => {
    cell.addEventListener('click', () => {
      const imagePath = cell.getAttribute('data-image');
      const link = document.createElement('a');
      link.href = imagePath;
      link.download = imagePath.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });

  /********************************
   * 2) CONFETTI: HELPER FUNCTION
   ********************************/
  function spawnConfettiPiece(container) {
    const confetti = document.createElement('img');
    // Use your heart confetti image (adjust path if needed)
    confetti.src = 'styles/heart-confetti.png';
    confetti.classList.add('confetti-piece');

    // Random size => 30–50px
    const size = Math.floor(Math.random() * 20) + 30;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    // Random horizontal start
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = '-50px'; // start above viewport

    // Minimal random delay => 0–0.5s
    const smallDelay = Math.random() * 0.5;
    confetti.style.animationDelay = `${smallDelay}s`;

    // Random duration => 10–20s
    const duration = 10 + Math.random() * 10;
    confetti.style.animationDuration = `${duration}s`;

    // Randomly pick CW or CCW animation
    const animationName = Math.random() < 0.5
      ? 'confettiDriftCW'
      : 'confettiDriftCCW';
    confetti.style.animationName = animationName;

    // Remove piece after animation completes
    confetti.addEventListener('animationend', () => {
      container.removeChild(confetti);
    });

    container.appendChild(confetti);
  }

  /********************************
   * 3) CONTINUOUS SPAWN
   ********************************/
  const container = document.querySelector('.confetti-container');
  if (!container) return;

  // Immediately spawn a few
  for (let i = 0; i < 5; i++) {
    spawnConfettiPiece(container);
  }

  // Spawn a new piece every second
  setInterval(() => {
    spawnConfettiPiece(container);
  }, 1000);
});
