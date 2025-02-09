document.addEventListener('DOMContentLoaded', () => {
  // Existing code for your decoration downloads
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

  // Confetti logic
  const container = document.querySelector('.confetti-container');
  if (!container) return;

  // 1) Fewer pieces => sparser confetti
  const confettiCount = 10;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('img');
    confetti.src = 'styles/jelly-confetti.png';
    confetti.classList.add('confetti-piece');

    // 2) Larger size range: 50–80px
    const size = Math.floor(Math.random() * 30) + 50;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    // Random left start (0–100%)
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = '-50px';

    // Slight random delay
    const delay = Math.random() * 5;
    confetti.style.animationDelay = `${delay}s`;

    // Slower drifting: 10–20s
    const duration = 10 + Math.random() * 10;
    confetti.style.animationDuration = `${duration}s`;

    container.appendChild(confetti);
  }
});
