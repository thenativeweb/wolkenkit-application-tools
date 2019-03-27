'use strict';

const forOwner = function () {
  return function (resource, action) {
    return resource.state.owner === action.user.id;
  };
};

module.exports = forOwner;
