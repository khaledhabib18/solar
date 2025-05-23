document.addEventListener('DOMContentLoaded', function () {
  function updateDateTime() {
    const now = new Date();
    const dateElem = document.getElementById('current-date');
    const timeElem = document.getElementById('current-time');
    if (dateElem && timeElem) {
      dateElem.textContent = now.toLocaleDateString();
      timeElem.textContent = now.toLocaleTimeString();
    }
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);

  const slider = document.getElementById('pump-slider');
  const valueText = document.getElementById('pump-value');

  if (slider && valueText) {
    slider.addEventListener('input', function () {
      valueText.textContent = `${slider.value}%`;
    });
  }
});