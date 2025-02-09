document.addEventListener('DOMContentLoaded', () => {
  /********************************
   * 1) EXISTING DECORATION DOWNLOAD LOGIC
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
   * 2) CONFETTI SPAWN LOGIC
   ********************************/
  const container = document.querySelector('.confetti-container');
  if (!container) return; // If there's no .confetti-container in the HTML, stop.

  /**
   * Spawns a single confetti piece at the top, drifting downward once.
   * Removes itself from DOM on animation end.
   */
  function spawnConfettiPiece() {
    // Create the <img> for the confetti
    const confetti = document.createElement('img');
    confetti.src = 'styles/jelly-confetti.png';  // Adjust path if needed
    confetti.classList.add('confetti-piece');

    // Random size (e.g., 30–50px)
    const size = Math.floor(Math.random() * 20) + 30;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    // Random horizontal start (0–100%)
    confetti.style.left = `${Math.random() * 100}%`;

    // Start slightly above the top
    confetti.style.top = '-50px';

    // OPTIONAL: small random delay so they don't all appear at once
    const smallDelay = Math.random() * 0.5; // 0–0.5s
    confetti.style.animationDelay = `${smallDelay}s`;

    // Random fall duration => e.g., 10–20s
    const duration = 10 + Math.random() * 10;
    confetti.style.animationDuration = `${duration}s`;

    // Remove from DOM when animation finishes
    confetti.addEventListener('animationend', () => {
      container.removeChild(confetti);
    });

    container.appendChild(confetti);
  }

  // Spawn 1 piece of confetti every 1000 ms (1 second)
  setInterval(() => {
    spawnConfettiPiece();
    // If you want multiple pieces per interval, do:
    // for (let i = 0; i < 2; i++) spawnConfettiPiece();
  }, 1000);
});
