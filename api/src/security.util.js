const password = require('password-hash-and-salt');

exports.getHash = text => new Promise((resolve, reject) => {
  password(text).hash((error, hash) => {
    if (error) reject(error);
    resolve(hash);
  });
});

exports.verifyHash = (text, hash) => new Promise((resolve, reject) => {
  password(text).verifyAgainst(hash, (error, verified) => {
    if (error) reject(error);
    resolve(verified);
  });
});
