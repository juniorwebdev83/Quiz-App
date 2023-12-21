const { google } = require('googleapis');
const fs = require('fs');

const credentialsPath = './persuasive-inn-404419-b193b8f26f35.json';
const tokenPath = './token.json';
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const authenticate = () => {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(credentialsPath);
      const credentials = JSON.parse(content);

      const { client_email, private_key } = credentials;
      const oAuth2Client = new google.auth.JWT({
        email: client_email,
        key: private_key,
        scopes: SCOPES,
      });

      fs.readFile(tokenPath, (err, token) => {
        if (err) {
          getAccessToken(oAuth2Client)
            .then((accessToken) => {
              oAuth2Client.setCredentials(accessToken);
              resolve(oAuth2Client);
            })
            .catch(reject);
        } else {
          oAuth2Client.setCredentials(JSON.parse(token));
          resolve(oAuth2Client);
        }
      });
    } catch (error) {
      console.error('Error reading credentials:', error.message);
      reject(error);
    }
  });
};

const getAccessToken = (oAuth2Client) => {
  return new Promise((resolve, reject) => {
    // Implement your logic to get access token
    // Example: Use OAuth2Client to get access token and resolve the promise
    // ...
  });
};

module.exports = authenticate;
