/**
 * Schrijf een functie processArray die een array en een callback-functie accepteert. 
 * De callback moet op elk element van de array worden toegepast.
 */

function processArray(arr, callback) {
 return callback(arr)
 
  
}

// Verwacht resultaat: [2, 4, 6, 8, 10]
const uitkomst = processArray([1, 2, 3, 4, 5], function (num) {
  for (let i = 0; i < num.length; i++) {
    num[i] *= 2
  }
  return num ;
});

console.log(uitkomst);