const repeatString = function(string, num) {
  let joinedString = '';

  if (num < 0) return 'ERROR';

  for (let i = 0; i < num; i++) {
    joinedString += string;
  }
  return joinedString;
};

// Do not edit below this line
module.exports = repeatString;
