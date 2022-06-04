#!/usr/bin/env node

var faker = require('../../index');
faker.locale = "en";

//console.log(faker.lorem.sentences())

// console.log(faker.refrigerator.refrigerator())
console.log(faker.motor_bike.motor_bike())
return
//console.log(faker.address)
console.log(faker.internet.email())
console.log(faker.date.recent())
console.log(faker.helpers.contextualCard());

faker.locale = "uk";