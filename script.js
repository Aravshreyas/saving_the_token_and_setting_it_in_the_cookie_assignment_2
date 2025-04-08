const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  // your code here and return token
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

const verify = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    console.log('Token is valid:', decoded);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      console.log('Token has expired!');
    } else {
      console.log('Invalid token!');
    }
  }
}

const payload = { userId: 123, role: 'admin' };
const secret = 'mySecretKey';

const token = encrypt(payload, secret);
console.log('Generated JWT:', token);

setTimeout(() => {
  verify(token, secret);
}, 2000);

module.exports = encrypt;
