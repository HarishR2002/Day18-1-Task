// Cat Facts API Key
const CAT_FACTS_API_KEY = 'YOUR_CAT_FACTS_API_KEY';

// Function to fetch cat facts using the API key
function fetchCatFacts() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('catFacts').innerHTML += `<li class="list-group-item">${data.fact}</li>`;
        })
        .catch(error => console.error('Error fetching cat facts:', error));
}

// Call fetchCatFacts function
document.addEventListener('DOMContentLoaded', fetchCatFacts);
