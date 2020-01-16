const net = require('net');
const { IP, PORT } = require('./constants');


const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    conn.write('Name: fla');
    console.log('New client connected!');
  });

  conn.on ("data", data =>{
    console.log('server says ', data);
  });

  conn.setEncoding('utf8'); 

  return conn;
};
// console.log('Connecting ...');
// connect();

module.exports = { connect };


