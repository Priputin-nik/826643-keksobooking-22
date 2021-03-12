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

const FOR_TYPE_MAPS = {
  1: 'palace',
  2: 'flat',
  3: 'house',
  4: 'bungalow',
};
const FOR_CHECK_IN = {
  1: '12:00',
  2: '13:00',
  3: '14:00',
};
const FOR_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
let getMixObject = function() {
let authorGeneration = {
  avatar: 'img/avatars/user'+'0'+getNumber(1, 8, 0)+'.png',
};
// для получения массива случайной длины из featuresSets с условием неповторения значений используем целиком forFeatures, перемешаем его, а затем возьмем нужное количество первых элементов
let featuresSets = new Array();
const getMix = function (array) {
  return array.sort(() => Math.random() - 0.5);
}
let fillFeaturesSets = getMix(FOR_FEATURES);
for (let i = 1; i <=  getNumber(1, 5, 0); i++) {
  featuresSets.push(fillFeaturesSets[i]);
}
// массив для индексов, которые будут прибавляться к ссылке фотографий
let photosIndex = new Array();
let photosSets = new Array();
for (let k = 1; k <=8; k++) {
  photosIndex.push(k);
}
// перемешаем индексы
let mixIndex = getMix(photosIndex);
for (let i = 1; i <=  getNumber(1, 8, 0); i++) {
  photosSets.push('http://o0.github.io/assets/images/tokyo/hotel'+photosIndex[i]+'.jpg');

};
let locationGeneration = {
  x: getNumber(35.65000, 35.70000, 5),
  y: getNumber(139.70000, 139.80000, 5),
};
let offerGeneration = {
  title: 'Предложение',
  address: 'location.' + locationGeneration.x + ', ' + 'location.' +locationGeneration.y,
  price: getNumber(1, 1e9, 0),
  type: FOR_TYPE_MAPS[getNumber(1, 4, 0)],
  guests: getNumber(1, 1e9, 0),
  checkin: FOR_CHECK_IN [getNumber(1, 3, 0)],
  checkout: FOR_CHECK_IN [getNumber(1, 3, 0)],
  features: featuresSets,
  description: 'Солнечно и просторно',
  photos: photosSets,
};
  let newObject = {
    author: authorGeneration,
    location: locationGeneration,
    offer: offerGeneration,
  }

  return newObject;
}

let endlessSets = new Array (10);
endlessSets.fill(null);
for (let j = 0; j <= endlessSets.length - 1; j++) {
  endlessSets[j] = getMixObject();

}
console.log(endlessSets);
