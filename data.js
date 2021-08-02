exports.data = (size) => {
  let datapool = Array.from(Array(size));
  for (let i = 0; i < datapool.length; i++) {
    datapool[i] = Array.from(Array(size).keys());
  }
  return datapool;
}