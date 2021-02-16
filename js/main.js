const getIntNumber = function(min, max) {
  let randomNumber = min - 0.5 + Math.random() * (max - min + 1);
  if (min < 0 || max < 0) {
    return 'Значения должны быть положительны'
  }
  if (min >= max) {
    return 'Неверно указан диапазон';
  }
  return Math.round(randomNumber);
}
console.log(getIntNumber(1, 7));

const getRealNumber = function(min, max, timeSign) {
  let randomRealNumber = min - 5 * Math.pow(10, -1 - timeSign)  + Math.random() * (max - min + Math.pow(10, - timeSign));
  if (min < 0 || max < 0) {
    return 'Значения должны быть положительны'
  }
  if (min >= max) {
    return 'Неверно указан диапазон';
  }
  return randomRealNumber.toFixed(timeSign);
}
console.log(getRealNumber(1.2, 3, 4));
