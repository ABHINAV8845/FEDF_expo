const citySelect = document.getElementById('citySelect');
const searchBtn = document.getElementById('searchBtn');
const status = document.getElementById('status');
const result = document.getElementById('result');

const resCity = document.getElementById('resCity');
const resDate = document.getElementById('resDate');
const resTemp = document.getElementById('resTemp');
const resHumidity = document.getElementById('resHumidity');
const resPM25 = document.getElementById('resPM25');
const resNO2 = document.getElementById('resNO2');
const resO3 = document.getElementById('resO3');
const resCO = document.getElementById('resCO');

let data = [];

// Load CSV file
fetch('Train.csv')
  .then(response => {
    if (!response.ok) {
      throw new Error('Could not load CSV file');
    }
    return response.text();
  })
  .then(csvText => {
    const rows = csvText.trim().split('\n');
    const headers = rows[0].split(',');

    data = rows.slice(1).map(row => {
      const values = row.split(',');
      let obj = {};
      headers.forEach((h, i) => obj[h] = values[i]);
      return obj;
    });

    // Fill dropdown after data is loaded
    data.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.Place_ID;
      opt.textContent = d.Place_Name;
      citySelect.appendChild(opt);
    });
    
    status.textContent = 'Data loaded successfully!';
    setTimeout(() => status.textContent = '', 2000);
  })
  .catch(error => {
    console.error('Error loading CSV:', error);
    status.textContent = 'Error: Could not load Train.csv file. Make sure it is in the same folder.';
  });

searchBtn.addEventListener('click', showData);

function showData() {
  const id = citySelect.value;
  if (!id) { status.textContent = "Please select a city"; return; }

  const cityData = data.find(d => d.Place_ID === id);
  if (!cityData) { status.textContent = "Data not found"; return; }

  status.textContent = '';
  result.style.display = 'block';

  resCity.textContent = cityData.Place_Name;
  resDate.textContent = "Date: " + cityData.Date;
  resTemp.textContent = "Temperature: " + cityData.Temperature_C + " °C";
  resHumidity.textContent = "Humidity: " + cityData.Humidity_percent + " %";
  resPM25.textContent = "PM2.5: " + cityData["PM2.5"];
  resNO2.textContent = "NO2: " + cityData.NO2;
  resO3.textContent = "O3: " + cityData.O3;
  resCO.textContent = "CO: " + cityData.CO;

  // Alert logic
  const alert = document.getElementById('alert');
  const alertMessage = document.getElementById('alertMessage');
  const pm25 = parseFloat(cityData["PM2.5"]);
  
  alert.style.display = 'block';
  
  if (pm25 > 60) {
    alert.className = 'alert';
    alertMessage.textContent = `⚠️ Poor air quality in ${cityData.Place_Name}! PM2.5 levels are unhealthy (${pm25}). Limit outdoor activities and wear a mask if going outside.`;
  } else if (pm25 > 35) {
    alert.className = 'alert moderate';
    alertMessage.textContent = `⚠️ Moderate air quality. Sensitive individuals should consider limiting prolonged outdoor activities.`;
  } else {
    alert.className = 'alert good';
    alertMessage.textContent = `✓ Good air quality in ${cityData.Place_Name}! Safe for outdoor activities.`;
  }
}