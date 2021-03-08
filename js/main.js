"use strict";
const getNumber = function(min, max, timeSign) {
  const randomNumber = min - 5 * Math.pow(10, -1 - timeSign)  + Math.random() * (max - min + Math.pow(10, - timeSign));
  if (min < 0 || max < 0) {
    return 'Значения должны быть положительны'
  }
  if (min >= max) {
    return 'Неверно указан диапазон';
  }
  return Number(randomNumber.toFixed(timeSign));
}
console.log(getNumber(4, 8, 3));
