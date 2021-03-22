"use strict";
import {getMixObject} from './get-mix-object.js';

let endlessSets = new Array (10);
endlessSets.fill(null);
for (let j = 0; j <= endlessSets.length - 1; j++) {
  endlessSets[j] = getMixObject();

}
console.log(endlessSets);
