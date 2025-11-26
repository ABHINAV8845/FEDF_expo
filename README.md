Air Quality Monitoring System 🌍

A web-based application that provides real-time air quality information for 200+ cities worldwide with intelligent health alerts.
Features

    🌐 Monitor air quality across 200+ global cities
    🎨 Modern, responsive UI with glassmorphism design
    🚦 Smart color-coded health alerts (Good/Moderate/Poor)
    📊 Display key metrics: Temperature, Humidity, PM2.5, NO2, O3, CO
    📱 Mobile-friendly and responsive design

Technologies Used

    HTML5 - Structure
    CSS3 - Styling with modern gradients and animations
    JavaScript - Data processing and dynamic interactions
    CSV - Data storage

Air Quality Categories

    🟢 Good (PM2.5 ≤ 35): Safe for outdoor activities
    🟠 Moderate (PM2.5 36-60): Sensitive individuals should be cautious
    🔴 Poor (PM2.5 > 60): Wear masks and limit outdoor activities

Installation & Usage

    Clone the repository:

git clone https://github.com/jahnaviraavi/air-quality-monitor.git

    Navigate to the project folder:

cd air-quality-monitor

    Run with a local server (required for CSV loading):
        Using VS Code: Install "Live Server" extension and click "Go Live"
        Using Python: python -m http.server 8000
        Using Node.js: npx serve

    Open http://localhost:8000 in your browser

Project Structure

├── index.html      # Main HTML file
├── style.css       # Styling and design
├── script.js       # JavaScript logic
├── Train.csv       # Air quality data (200+ cities)
└── README.md       # Project documentation

Data Source

The dataset includes air quality readings from 200+ cities worldwide, including:

    Temperature (°C)
    Humidity (%)
    PM2.5 (Particulate Matter 2.5)
    NO2 (Nitrogen Dioxide)
    O3 (Ozone)
    CO (Carbon Monoxide)

Future Enhancements

    Integrate live API for real-time data
    Add historical trends and graphs
    Include weather forecasts
    Push notifications for air quality changes
    Multi-language support

License

This project is open source and available under the MIT License.
Author

Your Name - Raavi jahnavi
Acknowledgments

    Data compiled from various air quality monitoring sources
    Inspired by the need for accessible environmental health information
