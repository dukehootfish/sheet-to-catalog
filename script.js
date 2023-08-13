const spreadsheetId = '15DkWp1UTI7varIFLKMVa13JGlpz6gIE1Zd9EZRU7_BQ';
const apiKey = 'AIzaSyBR2WBVvpeL3uB_dlua8UGFWAPYYyruPVg;
const range = 'sheety 11'; // Change this to your sheet's name

function fetchData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.values);
}

function displayData(data) {
    const catalogDiv = document.getElementById('catalog');
    let catalogHTML = '<h1>Catalog</h1>';
    
    data.forEach(item => {
        const [name, description, imageURL] = item;
        catalogHTML += `
            <div class="item">
                <img src="${imageURL}" alt="${name}">
                <h2>${name}</h2>
                <p>${description}</p>
            </div>
        `;
    });

    catalogDiv.innerHTML = catalogHTML;
}

fetchData()
    .then(displayData)
    .catch(error => console.error('Error fetching data:', error));
