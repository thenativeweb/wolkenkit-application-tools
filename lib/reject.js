'use strict';

const humanizeString = require('humanize-string');

const reject = function (command) {
  return {
    if (aggregateInstance) {
      return {
        doesNotExist () {
          if (aggregateInstance.exists()) {
            return;
          }

          const aggregateName = humanizeString(command.aggregate.name);

          command.reject(`${aggregateName} does not exist.`);
        },

        exists () {
          if (!aggregateInstance.exists()) {
            return;
          }

          const aggregateName = humanizeString(command.aggregate.name);

          command.reject(`${aggregateName} already exists.`);
        }
      };
    }
  };
};

module.exports = reject;
