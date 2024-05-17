const chunk = require('./chunk');


console.log(chunk.chunk(['a', 'b', 'c', 'd'], 2));
// [['a', 'b'], ['c', 'd']]

console.log(chunk.chunk(['a', 'b', 'c', 'd'], 3));
// [['a', 'b', 'c'], ['d']]