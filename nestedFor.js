const { performance } = require('perf_hooks');

exports.nestedForLoop = (data) => {

  let start = performance.now();

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      ++data[i][j];
    }
  }

  let end = performance.now();
  return (end - start);
}