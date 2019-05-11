const jwt = require('jsonwebtoken');

const keyId = 'GG8YAQBAHP';
const teamId = 'H8VMB34Z9R';

const options = {
  issuer: teamId,
  expiresIn: '182d',
  algorithm: 'ES256',
  header: {
    kid: keyId,
  },
};

const secret = `-----BEGIN PRIVATE KEY-----
MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgMEjcZBw0QDUUOMlO
pe29++2MKB9nv5D/WDycwMgcnY+gCgYIKoZIzj0DAQehRANCAAQmr42olpx3y15z
yzlpy77H6ZsUBKlZit763fL976Kq0BHaUMiVx7Nyq+8YihLX/f+DgYYj3WyRS9jm
6CtsFIKq
-----END PRIVATE KEY-----`;

const token = jwt.sign({}, secret, options);

console.log(token);
