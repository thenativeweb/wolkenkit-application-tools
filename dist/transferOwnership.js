'use strict';

var transferOwnership = function transferOwnership(aggregateInstance, _ref) {
  var to = _ref.to;

  if (!aggregateInstance) {
    throw new Error('Aggregate instance is missing.');
  }

  if (!to) {
    throw new Error('Owner is missing.');
  }

  if (to === aggregateInstance.state.owner) {
    throw new Error('Could not transfer ownership to current owner.');
  }

  aggregateInstance.events.publish('transferredOwnership', {
    from: aggregateInstance.state.owner,
    to: to
  });
};

module.exports = transferOwnership;