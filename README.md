ISS Tracker App (SPACE TECH APP)

A React Native mobile application built with Expo that tracks the International Space Station (ISS) in real time and displays the five Near-Earth Objects (meteors/asteroids) closest to Earth using data retrieved from NASA's public APIs.

Overview:

The ISS Tracker App provides an interactive way to explore real-time space data. Users can monitor the current location of the International Space Station and view information about nearby meteors and asteroids approaching Earth.

This project demonstrates API integration, geospatial visualization, and mobile application development using React Native.

Features:

Real-Time ISS Tracking
Fetches live ISS location data
Displays ISS position on an interactive map
Updates coordinates dynamically

Near-Earth Object Monitoring:

Retrieves data from NASA APIs
Identifies the 5 closest meteors/asteroids to Earth

Displays:
Object name
Estimated diameter
Distance from Earth
Relative velocity
Hazard status

Cross-Platform Support:

Android
iOS
Web

Interactive Maps:

Visual representation of ISS location
Real-time map updates using React Native Maps

Tech Stack:

Technology	Purpose
React Native	Mobile App Development
Expo	Development Framework
Axios	API Requests
React Navigation	Navigation Between Screens
React Native Maps	Map Visualization
NASA Open APIs	Space Data Source

Dependencies
{
  "@react-navigation/native": "^6.0.6",
  "@react-navigation/stack": "^6.0.11",
  "axios": "^0.25.0",
  "expo": "~44.0.0",
  "react-native-maps": "0.29.4"
}

Installation:

*Clone the Repository
  git clone https://github.com/yourusername/iss-tracker.git
*cd iss-tracker
*Install Dependencies
  npm install
*Start Development Server
  npm start
*Run on Android
  npm run android
*Run on iOS
  npm run ios
*Run on Web
  npm run web
  
NASA API Integration:

The application consumes publicly available NASA data to:

Track the International Space Station
Retrieve Near-Earth Object (NEO) information
Calculate and display the closest objects approaching Earth

Example data includes:

Asteroid Name
Close Approach Date
Miss Distance
Relative Velocity
Potential Hazard Classification

Learning Outcomes:

Through this project, I gained experience in:

REST API Integration
React Native Development
Mobile Navigation
Geolocation and Mapping
Data Processing and Sorting
Real-Time Data Visualization
NASA Open Data Usage

Future Enhancements:

Push notifications for close asteroid approaches
Historical ISS path visualization
Satellite tracking for additional spacecraft
Advanced asteroid filtering
Dark mode support
Space weather information integration
