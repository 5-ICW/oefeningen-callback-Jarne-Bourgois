/**
 * Schrijf een functie: doeIets, die een string als eerste argument accepteert en
 * een callback-functie als tweede argument. De callback functie moet de string 
 * als hoofdletters teruggeven. 
 * 
 * ( string omzetten naar hoofdletters: string.toUpperCase() )
 */

function doIets(text, callback) {
  return callback(text)
}

// Verwacht resultaat: "HALLO WERELD"
const uitkomst = doIets("Hallo wereld", function (res) {
  return res.toUpperCase()
});
console.log(uitkomst);
