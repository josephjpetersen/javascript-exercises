const sumAll = function(x, y) {
  
  if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
  if (x < 0 || y < 0) return "ERROR";

  let min = 0;
  let max = 0;
  let total = 0;

  if (x < y){
    min = x;
    max = y;
  } else {
    min = y;
    max = x;
  };

  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
