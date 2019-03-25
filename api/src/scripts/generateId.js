const monk = require('monk');

const id = monk.id().toHexString();

console.log(id);