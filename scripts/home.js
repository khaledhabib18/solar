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

const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const displayData = (data) => {
    const cardContainer = document.getElementById('card-container'); // Ensure this ID exists in your HTML
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card'; // Add appropriate classes for styling
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" class="card-link">Learn More</a>
        `;
        cardContainer.appendChild(card);
    });
};

document.addEventListener('DOMContentLoaded', fetchData);