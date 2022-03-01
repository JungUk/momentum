const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);


const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  }
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 2);
console.log(minusResult);
