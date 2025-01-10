document.addEventListener('DOMContentLoaded', () => {
  const decorationCells = document.querySelectorAll('.decoration-cell');

  decorationCells.forEach(cell => {
    cell.addEventListener('click', () => {
      const downloadBtn = cell.querySelector('.download-btn');
      if (downloadBtn) {
        downloadBtn.classList.toggle('hidden');
      }
    });
  });
});
