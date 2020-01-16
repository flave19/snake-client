const { connect } = require("./client");
const { setupInput } = require("./input");
// const {}
// const { connection } = require("./setupInput");

console.log("Connecting ...");

setupInput(connect())