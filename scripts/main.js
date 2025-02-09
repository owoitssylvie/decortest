document.addEventListener('DOMContentLoaded', () => {
  // 1) Existing code for decoration downloads
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

  // 2) Confetti logic
  const container = document.querySelector('.confetti-container');
  if (!container) return;

  const confettiCount = 15; // e.g. 15 pieces
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('img');
    confetti.src = 'styles/jelly-confetti.png'; 
    confetti.classList.add('confetti-piece');

    // Random pick: either "CW" or "CCW" animation
    const animationName = Math.random() < 0.5 ? 'confettiDriftCW' : 'confettiDriftCCW';
    confetti.style.animationName = animationName;

    // Random size
    const size = Math.floor(Math.random() * 20) + 30; 
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    // Position
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = '-50px';

    // Random delay
    const delay = Math.random() * 3;  // 0–3s
    confetti.style.animationDelay = `${delay}s`;

    // Random fall duration => slower means bigger number
    const duration = 10 + Math.random() * 10;
    confetti.style.animationDuration = `${duration}s`;

    container.appendChild(confetti);
  }
});
