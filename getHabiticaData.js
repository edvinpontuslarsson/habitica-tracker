'use strict';

const fetch = require('node-fetch');

module.exports = () =>
  new Promise((resolve) => {
    fetch('https://habitica.com/api/v3/tasks/user', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'x-api-user': process.env.API_USER,
        'x-api-key': process.env.API_KEY,
        'x-client': process.env.CLIENT,
      },
    }).then((res) => {
      resolve(res.json());
    });
  });
