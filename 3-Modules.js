// Modules
/*
CommonJS , every file is module (By Default)
Modules - Encapsulated Code (Only Share Minimum)
*/

const names = require('./4-names')
const SayHi = require('./5-utils')
const data = require('./6-alternateFlavors')
require('./7-mindGrenade')
console.log(data)
SayHi('Susan')
SayHi(names.peter)
