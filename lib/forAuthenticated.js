'use strict';

const forAuthenticated = function () {
  return function (resource, action) {
    return action.user.id !== 'anonymous';
  };
};

module.exports = forAuthenticated;
