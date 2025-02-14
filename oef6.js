/**
 * schrijf alle voorgaande oefeningen opnieuw uit in
 * oef12, oef22, oef32, oef42, oef52 maar maak
 * nu gebruik van een arrow function
 */

// oef12
const doIets = (text, callback) => callback(text);

// Verwacht resultaat: "HALLO WERELD"
const uitkomst = doIets("Hallo wereld", (res) => res.toUpperCase());
console.log(uitkomst);

// oef22
const processArray = (arr, callback) => callback(arr);

// Verwacht resultaat: [2, 4, 6, 8, 10]
const uitkomst2 = processArray([1, 2, 3, 4, 5], (num) => {
  for (let i = 0; i < num.length; i++) {
    num[i] *= 2;
  }
  return num;
});
console.log(uitkomst2);

// oef32
const greet = (name, callback) => callback(name);

// Verwacht resultaat: "Hallo, Sam!"
greet("Sam", (message) => console.log(`Hallo, ${message}!`));

// oef42
const doubleNumber = (num, callback) => callback(num);

// Verwacht resultaat: 10
doubleNumber(5, (res) => console.log(res * 2));

// oef52
const telOp = (lijst, callback) => callback(lijst);

// Verwacht resultaat: 35
telOp([5, 8, 10, 2, 3, 7], (res) => {
  for (let i = 1; i < res.length; i++) {
    res[i] += res[i - 1];
  }
  console.log(res[res.length - 1]);
});