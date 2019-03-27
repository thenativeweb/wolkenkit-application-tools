'use strict';

var forAuthenticated = require('./forAuthenticated'),
    forPublic = require('./forPublic'),
    reject = require('./reject');

module.exports = {
  forAuthenticated: forAuthenticated,
  forPublic: forPublic,
  reject: reject
};