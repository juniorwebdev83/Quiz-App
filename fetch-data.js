// fetch-data.js
// This script assumes you have already authenticated with Google Sheets API in your auth.js

const { google } = require('googleapis'); // Add this line to import googleapis
const { authenticate } = require('./auth'); // Adjust the path accordingly

async function recordCompletionTime(completionTime) {
  try {
    // Authenticate using the credentials
    const auth = await authenticate();

    // Access Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth }); // Use google.sheets

    // Replace 'spreadsheetId' with your actual Google Sheets ID
    const spreadsheetId = '1RPH5rSsiMKzpH0c8YizLZs1EV7MPt9WZaBeR6MjnYOo';

    // Replace 'Sheet1' with your actual sheet name or ID
    const range = 'Sheet1!A:Z'; // Assuming columns A to Z for the new data

    // Prepare the values to append
    const values = [
      [completionTime, 'AdditionalData'], // Replace 'AdditionalData' with the actual data you want to add
    ];

    // Append the new data to the entire sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values,
      },
    });

    console.log('New data appended:', values);
  } catch (error) {
    console.error('Error appending new data:', error.message);
  }
}

// Call the recordCompletionTime function to save completion time
// You can replace this with the actual completion time logic in your application
const completionTime = '2023-01-01 12:00:00'; // Replace this with the actual completion time
recordCompletionTime(completionTime);
