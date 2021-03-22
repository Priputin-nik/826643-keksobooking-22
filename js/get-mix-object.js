import {getNumber} from './util.js';
import {FOR_TYPE_MAPS, FOR_CHECK_IN, FOR_FEATURES} from './data.js';
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
  rooms: getNumber(1, 1e9, 0),
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
export {getMixObject};
