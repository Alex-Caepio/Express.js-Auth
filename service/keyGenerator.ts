import os from "os";
// const cp = require('child_process')
//   , assert = require('assert')
//   ;

// const privateKey = '';

// const publicKey = '';
// cp.exec('openssl genrsa 2048', function(err: Error, stdout: , stderr) {
//   assert.ok(!err);
//   privateKey = stdout;
//   console.log(privateKey);
//   makepub = cp.spawn('openssl', ['rsa', '-pubout']);
//   makepub.on('exit', function(code) {
//     assert.equal(code, 0);
//     console.log(publicKey);
//   });
//   makepub.stdout.on('data', function(data) {
//     publicKey += data;
//   });
//   makepub.stdout.setEncoding('ascii');
//   makepub.stdin.write(privateKey);
//   makepub.stdin.end();
// });
