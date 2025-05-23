document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('pump-slider');
  const valueText = document.getElementById('pump-value');

  if (slider && valueText) {
    slider.addEventListener('input', function () {
      valueText.textContent = `${slider.value}%`;
    });
  }

  function updateDateTime() {
    const now = new Date();
    document.getElementById('current-date').textContent = now.toLocaleDateString();
    document.getElementById('current-time').textContent = now.toLocaleTimeString();
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);
});