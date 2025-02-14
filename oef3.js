/**
 * Maak een functie greet die een naam aanneemt 
 * en een callback uitvoert die de naam gebruikt.
 */

function greet(name, callback) {
  callback(name)
}

// Verwacht resultaat: "Hallo, Sam!"
greet("Sam", function (message) {
  console.log(`Hallo, ${message}!`);
});