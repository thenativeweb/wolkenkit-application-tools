'use strict';

var forOwner = function forOwner() {
  return function (resource, action) {
    return resource.state.owner === action.user.id;
  };
};

module.exports = forOwner;