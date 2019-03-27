'use strict';

var forAuthenticated = function forAuthenticated() {
  return function (resource, action) {
    return action.user.id !== 'anonymous';
  };
};

module.exports = forAuthenticated;