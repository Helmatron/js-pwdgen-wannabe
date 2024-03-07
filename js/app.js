let name = prompt('Inserisci il tuo nome') // string
console.log(name);

let surname = prompt('Il tuo cognome') // string
console.log(surname);

let color = prompt('Il tuo colore preferito') // string
console.log(color);


// numero random da 0 a 99
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const random = (getRandomInt(99)); 
  
  
// FINE
console.log(name+surname+color+random); 