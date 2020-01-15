const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });

  conn.on('connect', () => {
    conn.write('Name: fla');
    console.log('New client connected!');
  });

  conn.on ("data", data =>{
    console.log('snake has sharp tongue', data);
  });

  conn.setEncoding('utf8'); 

  return conn;
};
console.log('Connecting ...');
connect();

module.exports = { connect };


