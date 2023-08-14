const catalogContainer = document.getElementById("catalog");

// Replace with your Google Sheets URL
const googleSheetsURL = "YOUR_GOOGLE_SHEETS_PUBLISHED_URL";

// Fetch data from Google Sheets
fetch(googleSheetsURL)
    .then(response => response.text())
    .then(data => {
        const lines = data.split("\n");
        const attributes = lines[0].split(",");
        
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(",");
            const item = {};
            for (let j = 0; j < attributes.length; j++) {
                item[attributes[j]] = values[j];
            }
            
            // Create HTML elements to display catalog items
            const itemDiv = document.createElement("div");
            itemDiv.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>Price: ${item.price}</p>
                <img src="${item.imageURL}" alt="${item.name}">
            `;
            
            catalogContainer.appendChild(itemDiv);
        }
    })
    .catch(error => console.error("Error fetching data:", error));
