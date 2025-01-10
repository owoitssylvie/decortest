document.addEventListener('DOMContentLoaded', () => {
  // 1. Grab all decoration cells
  const decorationCells = document.querySelectorAll('.decoration-cell');

  decorationCells.forEach(cell => {
    // 2. Add a click event listener
    cell.addEventListener('click', () => {
      const downloadBtn = cell.querySelector('.download-btn');
      
      // Toggle a "clicked" class that forces it to show
      if (downloadBtn) {
        downloadBtn.classList.toggle('hidden');
      }
    });
  });
});
