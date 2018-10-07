module.exports = function resultConsecutiveLength(array) {
  let result = 0;
  const hash = {};
  array.forEach(function(number) {
    hash[number] = true;
  });
  for (let number in hash) {
    let current = Number(number),
        count = 1;
    while (hash[current + 1]) {
      count++;
      current++;
    }
  result = Math.max(result, count);
  }
 return result;
}