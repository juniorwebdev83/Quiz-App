const { google } = require('googleapis');
const authenticate = require('./auth');

const spreadsheetId = '1RPH5rSsiMKzpH0c8YizLZs1EV7MPt9WZaBeR6MjnYOo'; // Replace with your actual Google Sheets ID

async function getData() {
  try {
    const auth = await authenticate();
    const sheets = google.sheets({ version: 'v4', auth });
    const range = 'Sheet1!A1:Z100'; // Adjust the range based on your data

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = response.data.values;
    console.log('Fetched Data:', values);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

getData();
