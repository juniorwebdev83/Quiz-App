// fetch-data.js
// This script assumes you have already authenticated with Google Sheets API in your authenticate.js

async function fetchData() {
    try {
      // Authenticate using the credentials
      const { authenticate } = require('./authenticate'); // Adjust the path accordingly
      const auth = await authenticate();
  
      // Access Google Sheets API
      const sheets = google.sheets({ version: 'v4', auth });
  
      // Replace 'spreadsheetId' with your actual Google Sheets ID
      const spreadsheetId = '1RPH5rSsiMKzpH0c8YizLZs1EV7MPt9WZaBeR6MjnYOo';
  
      // Replace 'Sheet1' with your actual sheet name or ID
      const range = 'Sheet1!A1:Z100';
  
      // Fetch data from the specified range
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
  
      // Extract values from the response
      const values = response.data.values;
  
      // Log the fetched data
      console.log('Fetched Data:', values);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the fetchData function to fetch data
  fetchData();
  