
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(names);
console.log(data)
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
require('./7-mind-grenade')