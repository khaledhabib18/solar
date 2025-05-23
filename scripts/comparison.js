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
});

fetch('https://api.example.com/data4')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Process and display the data on the page
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });