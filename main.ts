/**
 * @author: Zachary Fowler
 * @version: 1.0.0
 * @date: 2025-11-20
 * @fileoverview: This file calculates interest 
 */

// INPUT
// Promting the user for a value and percentage
const inputValue = prompt("Enter the initial value: ") || "0";
const initialValue = parseInt(inputValue);

const inputRate = prompt("Enter the interest rate (percent): ") || "0";
const interestRate = parseInt(inputRate);

// PROCESS
const rate = interestRate / 100;

// Year 1
const interest1 = initialValue * rate;
const value1 = initialValue + interest1;

// Year 2
const interest2 = value1 * rate;
const value2 = value1 + interest2;

// Year 3
const interest3 = value2 * rate;
const value3 = value2 + interest3;

// Year 4
const interest4 = value3 * rate;
const value4 = value3 + interest4;

// Year 5
const interest5 = value4 * rate;
const value5 = value4 + interest5;

// Year 6
const interest6 = value5 * rate;
const value6 = value5 + interest6;

// Year 7
const interest7 = value6 * rate;
const value7 = value6 + interest7;

// Year 8
const interest8 = value7 * rate;
const value8 = value7 + interest8;

// Year 9
const interest9 = value8 * rate;
const value9 = value8 + interest9;

// Year 10
const interest10 = value9 * rate;
const value10 = value9 + interest10;

// OUTPUT
console.log(`${"Year".padEnd(10)}${"Initial".padStart(20)}${"Interest".padStart(20)}${"Value".padStart(20)}`);

console.log(`${"1".padEnd(10)}${(`$${initialValue.toFixed(2)}`).padStart(20)}${(`$${interest1.toFixed(2)}`).padStart(20)}${(`$${value1.toFixed(2)}`).padStart(20)}`);
console.log(`${"2".padEnd(10)}${(`$${initialValue.toFixed(2)}`).padStart(20)}${(`$${interest2.toFixed(2)}`).padStart(20)}${(`$${value2.toFixed(2)}`).padStart(20)}`);
console.log(`${"3".padEnd(10)}${(`$${initialValue.toFixed(2)}`).padStart(20)}${(`$${interest3.toFixed(2)}`).padStart(20)}${(`$${value3.toFixed(2)}`).padStart(20)}`);
console.log(`${"4".padEnd(10)}${(`$${initialValue.toFixed(2)}`).padStart(20)}${(`$${interest4.toFixed(2)}`).padStart(20)}${(`$${value4.toFixed(2)}`).padStart(20)}`);
console.log(`${"5".padEnd(10)}${(`$${initialValue.toFixed(2)}`).padStart(20)}${(`$${interest5.toFixed(2)}`).padStart(20)}${(`$${value5.toFixed(2)}`).padStart(20)}`);
console.log(`${"6".padEnd(10)}${(`$${initialValue.toFixed(2)}`).padStart(20)}${(`$${interest6.toFixed(2)}`).padStart(20)}${(`$${value6.toFixed(2)}`).padStart(20)}`);
console.log(`${"7".padEnd(10)}${(`$${initialValue.toFixed(2)}`).padStart(20)}${(`$${interest7.toFixed(2)}`).padStart(20)}${(`$${value7.toFixed(2)}`).padStart(20)}`);
console.log(`${"8".padEnd(10)}${(`$${initialValue.toFixed(2)}`).padStart(20)}${(`$${interest8.toFixed(2)}`).padStart(20)}${(`$${value8.toFixed(2)}`).padStart(20)}`);
console.log(`${"9".padEnd(10)}${(`$${initialValue.toFixed(2)}`).padStart(20)}${(`$${interest9.toFixed(2)}`).padStart(20)}${(`$${value9.toFixed(2)}`).padStart(20)}`);
console.log(`${"10".padEnd(10)}${(`$${initialValue.toFixed(2)}`).padStart(20)}${(`$${interest10.toFixed(2)}`).padStart(20)}${(`$${value10.toFixed(2)}`).padStart(20)}`);

console.log("\nDone.")