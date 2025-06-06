# Practical2_Implementing_Requests_To_A_Public_API

A simple web application demonstrating GET, POST, PUT, and DELETE HTTP requests using weather data and location management.

## Project Overview

This application combines two APIs to demonstrate all four main HTTP methods:
- **OpenWeatherMap API** - For retrieving weather data (GET requests)
- **JSONPlaceholder API** - For managing saved locations (POST, PUT, DELETE requests)

## Features

- Get current weather for any city
- Save favorite locations
- Edit saved location details
- Delete unwanted locations
- Tabbed interface for different operations
- Real-time API response display

## Project Structure

```
weather-app/
├── index.html
└── script.js
```

## Setup Instructions

### Step 1: Create Project Directory
Create a new folder for your project and add two files:
- `index.html` - User interface
- `script.js` - JavaScript functionality

### Step 2: Get API Key
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Replace `YOUR_OPENWEATHERMAP_API_KEY` in script.js with your actual key

### Step 3: HTML Structure
The HTML file includes:
- Tabbed navigation for different API operations
- Weather lookup form for GET requests
- Location saving form for POST requests
- Display area for saved locations
- Modal for editing locations
- Response information display

### Step 4: JavaScript Implementation
The JavaScript handles:
- Tab switching functionality
- API request functions for all HTTP methods
- Data processing and display
- Error handling and user feedback

## API Operations

### GET Request - Weather Data
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Purpose: Retrieve current weather for a city
- Parameters: City name and API key

### POST Request - Save Location
- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Purpose: Save a new favorite location
- Data: Location name, country, and notes

### PUT Request - Update Location
- Endpoint: `https://jsonplaceholder.typicode.com/posts/{id}`
- Purpose: Update existing location details
- Data: Modified location information

### DELETE Request - Remove Location
- Endpoint: `https://jsonplaceholder.typicode.com/posts/{id}`
- Purpose: Delete a saved location
- Parameters: Location ID

## Usage Instructions

### Getting Weather Data
1. Click on the "Get Weather" tab
2. Enter a city name in the input field
3. Click "Get Weather" button
4. View the weather information displayed below

### Saving Locations
1. Click on the "Save Location" tab
2. Fill in the location form:
   - Location name
   - Country
   - Notes (optional)
3. Click "Save Location" button
4. Location will appear in the saved locations list

### Editing Locations
1. Go to the "Saved Locations" tab
2. Click "Edit" button next to any location
3. Modify the information in the modal
4. Click "Update Location" to save changes

### Deleting Locations
1. Go to the "Saved Locations" tab
2. Click "Delete" button next to any location
3. Location will be removed from the list

## Key Features

### Tabbed Interface
- Clean navigation between different operations
- Active tab highlighting
- Organized content sections

### Error Handling
- API error messages displayed to user
- Network error handling
- Input validation feedback

### Response Display
- Shows actual API responses
- HTTP status codes
- Request and response data

### Local Storage
- Saves locations locally in browser
- Persists data between sessions
- Manages location IDs automatically

## Technical Implementation

### HTTP Methods Used
- **GET**: Retrieve weather data
- **POST**: Create new locations
- **PUT**: Update existing locations
- **DELETE**: Remove locations

### JavaScript Features
- Fetch API for HTTP requests
- Async/await for handling promises
- Local storage for data persistence
- DOM manipulation for UI updates
- Event listeners for user interactions

### CSS Styling
- Responsive design
- Clean, modern interface
- Tab navigation styling
- Form styling and layout
- Modal dialog styling

## Testing the Application

### Test GET Requests
1. Enter valid city names like "London", "New York", "Tokyo"
2. Try invalid city names to test error handling
3. Check that weather data displays correctly

### Test POST Requests
1. Add multiple locations with different details
2. Verify locations appear in the saved list
3. Check that data persists after page refresh

### Test PUT Requests
1. Edit existing locations
2. Modify different fields
3. Confirm changes are saved and displayed

### Test DELETE Requests
1. Delete various locations
2. Verify they are removed from the list
3. Check that IDs are handled correctly

## Common Issues and Solutions

### API Key Problems
- Ensure API key is correctly placed in script.js
- Check that API key is active and valid
- Verify no extra spaces or characters

### CORS Issues
- Use the application by opening index.html directly in browser
- Some browsers may block local file access
- Consider using a local server for development

### Network Errors
- Check internet connection
- Verify API endpoints are accessible
- Look for any firewall or proxy issues

## Browser Compatibility
- Works in all modern browsers
- Requires JavaScript enabled
- Uses Fetch API (supported in IE 10+)
- Local storage support required

## Future Enhancements
- Add weather forecasts
- Include weather maps
- Add location search with autocomplete
- Implement user authentication
- Add weather alerts and notifications
- Include historical weather data