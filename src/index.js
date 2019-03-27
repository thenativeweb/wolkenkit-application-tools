'use strict';

const forAuthenticated = require('./forAuthenticated'),
      forPublic = require('./forPublic'),
      reject = require('./reject');

module.exports = { forAuthenticated, forPublic, reject };
