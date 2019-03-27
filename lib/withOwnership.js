'use strict';

const humanizeString = require('humanize-string');

const forOwner = require('./forOwner'),
      transferOwnership = require('./transferOwnership');

const withOwnership = function (aggregate) {
  if (aggregate.initialState.owner) {
    throw new Error(`State property 'owner' is already being used.`);
  }
  if (aggregate.commands.transferOwnership) {
    throw new Error(`Command name 'transferOwnership' is already being used.`);
  }
  if (aggregate.events.transferredOwnership) {
    throw new Error(`Event name 'transferredOwnership' is already being used.`);
  }

  aggregate.initialState.owner = undefined;

  aggregate.commands.transferOwnership = {
    isAuthorized: forOwner(),

    handle (aggregateInstance, command) {
      try {
        if (!aggregateInstance.exists()) {
          const aggregateName = humanizeString(command.aggregate.name);

          throw new Error(`${aggregateName} does not exist.`);
        }

        transferOwnership(aggregateInstance, { to: command.data.to });
      } catch (ex) {
        return command.reject(ex.message);
      }
    }
  };

  aggregate.events.transferredOwnership = function (aggregateInstance, event) {
    aggregateInstance.setState({
      owner: event.data.to
    });
  };

  return aggregate;
};

module.exports = withOwnership;
