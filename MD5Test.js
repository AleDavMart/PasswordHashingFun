const crypto = require ('crypto');

const hash = crypto.createHash('md5'); //selecting the hash algorithm that will be used 

hash.update('password23'); // passing in the password the user created 

console.log('Hashed Password:'+ hash.digest('hex')); // This will return the hashed password
