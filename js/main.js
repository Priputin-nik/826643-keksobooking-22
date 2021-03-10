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
};
let FORTYPEMAPS = {
  1: 'palace',
  2: 'flat',
  3: 'house',
  4: 'bungalow',
};
let FORCHECKIN = {
  1: '12:00',
  2: '13:00',
  3: '14:00',
};
let forFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
let AUTHOR = {
  avatar: 'img/avatars/user'+'0'+getNumber(1, 8, 0)+'.png',
};
// для получения массива случайной длины из featuresArr с условием неповторения значений используем целиком forFeatures, перемешаем его, а затем возьмем нужное количество первых элементов
let featuresArr = new Array();
let getMix = function (array) {
  return array.sort(() => Math.random() - 0.5);
}
let fullFeaturesArr = getMix(forFeatures);
for (let i = 1; i <=  getNumber(1, 5, 0); i++) {
  featuresArr.push(fullFeaturesArr[i]);
}
let photosArr = new Array();
// Определим длину массива для photos, ограничим его: от 1 до 5 значений

for (let i = 1; i <=  getNumber(1, 5, 0); i++) {
  photosArr.push('http://o0.github.io/assets/images/tokyo/hotel'+i+'.jpg');

}

let OFFER = {
  title: 'Предложение',
  address: 'location.' + getNumber(35.65000, 35.70000, 5) + ', ' + 'location.' + getNumber(139.70000, 139.80000, 5),
  price: getNumber(1, 1e9, 0),
  type: FORTYPEMAPS[getNumber(1, 4, 0)],
  guests: getNumber(1, 1e9, 0),
  checkin: FORCHECKIN [getNumber(1, 4, 0)],
  checkout: FORCHECKIN [getNumber(1, 4, 0)],
  features: featuresArr,
  description: 'Солнечно и просторно',
  photos: photosArr,
};
let LOCATION = {
  x: getNumber(35.65000, 35.70000, 5),
  y: getNumber(139.70000, 139.80000, 5),
};
let endlessArr = new Array (10);
endlessArr.fill(null);
for (let j = 0; j <= endlessArr.length - 1; j++) {
  endlessArr[j] = Object.assign({}, AUTHOR, OFFER, LOCATION);
}
console.log(endlessArr);
