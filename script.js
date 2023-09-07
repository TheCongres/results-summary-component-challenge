// script.js

// Function to fetch and process JSON data
function fetchData() {
    fetch('data.json') // Replace 'your-data.json' with the path to your JSON file
      .then((response) => response.json())
      .then((data) => {
        // Iterate over the JSON data
        data.forEach((item) => {
          const category = item.category;
          const score = item.score;
          const iconSrc = item.icon;
  
          // Find the corresponding HTML elements by class or ID
          const categoryElement = document.querySelector(`.${category.toLowerCase()}-badge b`);
          const scoreElement = document.querySelector(`.${category.toLowerCase()}-badge + p b`);
          const iconElement = document.querySelector(`.${category.toLowerCase()}-badge img`);
  
          // Update the HTML elements with JSON data
          categoryElement.textContent = category;
          scoreElement.textContent = score;
          iconElement.setAttribute('src', iconSrc);
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Call the fetchData function to load and update data
  fetchData();
  
  