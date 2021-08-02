// const { nestedForLoop } = require('./nestedFor');
const { nestedMap } = require('./nestedMap');
const { trials } = require('./trials');
const { data } = require('./data');

// Generate (n x n) matrix to perform operations on
let datapool = data(5000);

// Define number of times to run trial against datapool
const testCount = 5000;

// Run specified trial 'testCount' number of times on matrix
let result = trials(nestedMap, testCount, datapool);


// Log the average time taken to complete each trial to console
console.log(`Average test time: ${result} milliseconds`);