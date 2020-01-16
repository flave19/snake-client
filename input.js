let connection;
const { MoveDown, MoveRight , MoveLeft, MoveUp } = require('./constants');

const handleUserInput = function(data){
  if (data === '\u0003') {
    process.exit();
  }
  if(data === MoveUp){
    connection.write('Move: up')
  }
  if(data === MoveDown){
    connection.write('Move: down')
  }
  if(data === MoveLeft){
    connection.write('Move: left')
  }
  if(data === MoveRight){
    connection.write('Move: right')
  }
  // if(data === 'q'){
  //   connection.write(Say:'hello')
  // }
}


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// setupInput()
module.exports ={setupInput}