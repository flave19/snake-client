const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    // conn.write('Hello there!')
    console.log('New client connected!');
    conn.write('Name: fla')
    conn.write('Move: up')
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
};
// console.log('Connecting ...');
// connect();

module.exports = { connect };


