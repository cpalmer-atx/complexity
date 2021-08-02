const { performance } = require('perf_hooks');

exports.nestedMap = (data) => {

  let start = performance.now();

  const result = data.map( subData => subData.map( data => ++data ));

  let end = performance.now();
  return (end - start);
}