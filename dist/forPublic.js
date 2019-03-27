'use strict';

var forPublic = function forPublic() {
  return function () {
    return true;
  };
};

module.exports = forPublic;