/*
Title: JavaScript Functions
Author: Aline Vetrov
Date: Feb.5, 2020
*/

/**
 * @description log anything to the console
 * @param {*} obj 
 */
function l(obj) {
    console.log(obj);
}

/**
 * @description adds two numbers
 * @param {number} value1 the first value
 * @param {number} value2 the second value
 * @returns {number} sum of value1 and value2
 */
function add(value1, value2) {
    return value1 + value2;
}

let a = add(3,4);
l(a);

/**
 * @description subtracts two numbers
 * @param {number} value1 first value
 * @param {number} valu2 second value
 * @returns {number} the difference between value1 and value2
 */
let subtract = function(value1,valu2) {
    return value1 - value2;
}

let b = subtract(10,5);
l(b);

/**
 * @description multiply two numbers
 * @param {number} value1 first value
 * @param {number} valu2 second value
 * @returns {number} the product of value1 and value2
 */
let multiply = (value1,valu2) => {
    return value1 - value2;
}

let c = multiply(4,5);
l(c);

add = 'aline';
l(add);
add = 3 * 7;
l(add);
l(subtract(add,10));
