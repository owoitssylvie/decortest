document.addEventListener('DOMContentLoaded', () => {
  // 1) Existing code for decoration downloads
  const decorationCells = document.querySelectorAll('.decoration-cell');

  decorationCells.forEach(cell => {
    cell.addEventListener('click', () => {
      // Get the path to the PNG from the data-attribute
      const imagePath = cell.getAttribute('data-image');

      // Create a hidden <a> element programmatically
      const link = document.createElement('a');
      link.href = imagePath;
      // Extract just the filename (e.g., 'somefile.png')
      link.download = imagePath.split('/').pop();

      // Append, click, and remove the link to trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });

  // 2) Confetti script
  // Make sure you have <div class="confetti-container"></div> in your HTML
  const container = document.querySelector('.confetti-container');
  if (!container) return; // if no container, exit

  const confettiCount = 30; // number of confetti pieces

  for (let i = 0; i < confettiCount; i++) {
    // Create an <img> for each confetti piece
    const confetti = document.createElement('img');
    // Adjust path if the PNG is elsewhere
    confetti.src = 'styles/jelly-confetti.png';
    // a CSS class you'll define for position/animation
    confetti.classList.add('confetti-piece');

    // Random size (e.g. 15–30px)
    const size = Math.floor(Math.random() * 15) + 15;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    // Random horizontal start (0–100%)
    confetti.style.left = `${Math.random() * 100}%`;

    // Start slightly above the top
    confetti.style.top = '-50px';

    // Random delay so they don’t all start at once
    const delay = Math.random() * 5; // 0–5s
    confetti.style.animationDelay = `${delay}s`;

    // Random fall duration (4–9s)
    const duration = 4 + Math.random() * 5;
    confetti.style.animationDuration = `${duration}s`;

    container.appendChild(confetti);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // 1) Existing code for decoration downloads
  const decorationCells = document.querySelectorAll('.decoration-cell');

  decorationCells.forEach(cell => {
    cell.addEventListener('click', () => {
      // Get the path to the PNG from the data-attribute
      const imagePath = cell.getAttribute('data-image');

      // Create a hidden <a> element programmatically
      const link = document.createElement('a');
      link.href = imagePath;
      // Extract just the filename (e.g., 'somefile.png')
      link.download = imagePath.split('/').pop();

      // Append, click, and remove the link to trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });

  // 2) Confetti script
  // Make sure you have <div class="confetti-container"></div> in your HTML
  const container = document.querySelector('.confetti-container');
  if (!container) return; // if no container, exit

  const confettiCount = 30; // number of confetti pieces

  for (let i = 0; i < confettiCount; i++) {
    // Create an <img> for each confetti piece
    const confetti = document.createElement('img');
    // Adjust path if the PNG is elsewhere
    confetti.src = 'styles/jelly-confetti.png';
    // a CSS class you'll define for position/animation
    confetti.classList.add('confetti-piece');

    // Random size (e.g. 15–30px)
    const size = Math.floor(Math.random() * 15) + 15;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    // Random horizontal start (0–100%)
    confetti.style.left = `${Math.random() * 100}%`;

    // Start slightly above the top
    confetti.style.top = '-50px';

    // Random delay so they don’t all start at once
    const delay = Math.random() * 5; // 0–5s
    confetti.style.animationDelay = `${delay}s`;

    // Random fall duration (4–9s)
    const duration = 4 + Math.random() * 5;
    confetti.style.animationDuration = `${duration}s`;

    container.appendChild(confetti);
  }
});
