const { connect } = require("./client");
const { setupInput } = require("./input");
// const { connection } = require("./setupInput");

console.log("Connecting ...");

setupInput(connect())
