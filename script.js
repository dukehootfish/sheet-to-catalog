const itemsContainer = document.getElementById('items-container');

// Replace with your Google Sheets URL
const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQiD4YbQLlsyn8IYJwA4QgKaVW8U7yToBg57duch6Akz_iuOMsZmYz-rTjuc54snxSMPfSTJEbxinyQ/pubhtml';

fetch(sheetUrl)
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        const headers = rows[0].split(',');

        for (let i = 1; i < rows.length; i++) {
            const values = rows[i].split(',');
            const item = {};

            for (let j = 0; j < headers.length; j++) {
                item[headers[j]] = values[j];
            }

            const itemElement = createItemElement(item);
            itemsContainer.appendChild(itemElement);
        }
    });

function createItemElement(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    const image = document.createElement('img');
    image.src = item['Image'];
    itemDiv.appendChild(image);

    const itemName = document.createElement('h2');
    itemName.textContent = item['Item Name'];
    itemDiv.appendChild(itemName);

    const description = document.createElement('p');
    description.textContent = item['Description'];
    itemDiv.appendChild(description);

    const price = document.createElement('p');
    price.textContent = 'Price: $' + item['Price'];
    itemDiv.appendChild(price);

    return itemDiv;
}
