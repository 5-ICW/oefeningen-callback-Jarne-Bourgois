/**
 * Maak een functie totaal die een array als eerst parameter heeft 
 * en een callback als tweede paramater.
 * Als resultaat telt hij alle nummer op van de array 
 */

function telOp(lijst, callback) {
  callback(lijst)
}

// Verwacht resultaat: 35
telOp([5,8,10,2,3,7], function (res) {
  res[0] = res[0] 
  for (let i = 1; i < res.length; i++) {
    res[i] = res[i] + res[i-1]
  }
  console.log(res[res.length-1]);
});