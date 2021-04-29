// Require axios
const axios = require('axios');

const api = {
  async getUser(userResponses) {
    try { let response = await axios
        
      // Sample URL: https://api.github.com/users/jinhong-dev
        .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

// Must always export module to call in index.js
module.exports = api;