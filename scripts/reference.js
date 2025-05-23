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

fetch('https://api.example.com/data3')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process and display the data on the page
    console.log(data);
    // Example: document.getElementById('data-container').innerText = JSON.stringify(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

