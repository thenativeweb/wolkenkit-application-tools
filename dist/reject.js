'use strict';

var humanizeString = require('humanize-string');

var reject = function reject(command) {
  return {
    if: function _if(aggregateInstance) {
      return {
        doesNotExist: function doesNotExist() {
          if (aggregateInstance.exists()) {
            return;
          }

          var aggregateName = humanizeString(command.aggregate.name);
          command.reject("".concat(aggregateName, " does not exist."));
        },
        exists: function exists() {
          if (!aggregateInstance.exists()) {
            return;
          }

          var aggregateName = humanizeString(command.aggregate.name);
          command.reject("".concat(aggregateName, " already exists."));
        }
      };
    }
  };
};

module.exports = reject;