const monk = require('monk');

module.exports.generateId = () => {
  const id = monk.id().toHexString();
  return id;
};
