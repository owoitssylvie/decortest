document.addEventListener('DOMContentLoaded', () => {
  // Existing download logic...
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

  // Confetti logic:
  const container = document.querySelector('.confetti-container');
  if (!container) return; // in case the container doesn't exist

  const confettiCount = 30; // number of confetti pieces
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('img');
    confetti.src = 'styles/jelly-confetti.png'; // path to your image
    confetti.classList.add('confetti-piece');

    // Random size (e.g. 15–30px)
    const size = Math.floor(Math.random() * 15) + 15;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    // Random horizontal start (0–100%)
    confetti.style.left = `${Math.random() * 100}%`;

    // Start slightly above top
    confetti.style.top = '-50px';

    // Random delay so they don't all appear at once
    const delay = Math.random() * 5;  // 0–5 seconds
    confetti.style.animationDelay = `${delay}s`;

    // SLOWER: random duration from 10s to 20s
    const duration = 10 + Math.random() * 10; 
    confetti.style.animationDuration = `${duration}s`;

    container.appendChild(confetti);
  }
});
