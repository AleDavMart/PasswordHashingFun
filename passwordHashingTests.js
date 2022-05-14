const crypto = require ('crypto');

const hash = crypto.createHash('md5'); //selecting the hash algorithm that will be used 

hash.update('password23'); // passing in the password the user created 

console.log('MD5 Hashed Password:'+ hash.digest('hex')); // This will return the hashed password

//Will not run due to error in thinking that im updating the same hash

const shaHash = crypto.createHash('ha256'); // selecting the hash 256

shaHash.update('pasword23');

console.log('sha256 Hash password:'+ shaHash.digest('hex'));
