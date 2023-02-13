// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

function giveMeRandom(n) {
    let numbers = [];
    for (let i = 0; i < n; i++) {
      numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
  }
  
  function checkArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      let isGreaterThanFive = numbers[i] > 5;
      console.log(numbers[i] + " is greater than 5: " + isGreaterThanFive);
      if (isGreaterThanFive) {
        sum += numbers[i];
      }
    }
    return sum;
  }
  
  let randomNumbers = giveMeRandom(7);
  let result = checkArray(randomNumbers);
  console.log("The sum of numbers greater than 5 is: " + result);



/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

let shoppingCart = [
    {id: 1, name: "product1", price: 10, quantity: 2},
    {id: 2, name: "product2", price: 20, quantity: 1},
    {id: 3, name: "product3", price: 5, quantity: 3}
]

let sum = 0;

function shoppingCartTotal(array) {
  for (let i=0; i <array.length ;i++) {
    let partial = array[i].price * array[i].quantity
    sum += partial
  }
  return sum
}
console.log(shoppingCartTotal(shoppingCart));





/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

let shoppingCart2 = [
  {id: 1, name: "product1", price: 10, quantity: 2},
  {id: 2, name: "product2", price: 20, quantity: 1},
  {id: 3, name: "product3", price: 5, quantity: 3}
]

function addToShoppingCart(obj) {
  shoppingCart2.push(obj) 
  return shoppingCart2
}

let newObj =  {id: 4, name: "product4", price: 32, quantity: 4}

addToShoppingCart(newObj)
console.log(shoppingCart2, shoppingCart2.length);



/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/
let shoppingCart3 = [
  {id: 1, name: "product1", price: 10, quantity: 7},
  {id: 2, name: "product2", price: 40, quantity: 1},
  {id: 3, name: "product3", price: 5, quantity: 3}
]

function maxShoppingCart(arr) {
  let higherPrice = arr[0];
  for (i=0; i < arr.length; i++) {
    if (arr[i].price > higherPrice.price) {
      higherPrice = arr[i];
    } 
  }
  return higherPrice;
}

console.log(maxShoppingCart(shoppingCart3));


/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

let shoppingCart4 = [
  {id: 1, name: "product1", price: 10, quantity: 7},
  {id: 2, name: "product2", price: 40, quantity: 1},
  {id: 3, name: "product3", price: 5, quantity: 3}
]

function latestShoppingCart(arr) {
  let lastItem = arr[arr.length - 1]
  return lastItem
}

console.log(latestShoppingCart(shoppingCart4));


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/


function loopUntil(x) {
  let numbIsInt = x % 1 === 0;
  if (numbIsInt && (x > 0 && x < 9)) {
    let random = Math.floor(Math.random() * 9);
    let random2 = Math.floor(Math.random() * 9);
    let random3 = Math.floor(Math.random() * 9);
    if (random > x && random2 > x && random3 > x) {
      console.log(random);
      console.log(random2);
      console.log(random3);
    }
  } else if (x !== (x % 1 === 0) && x < 9) {
    console.log("il numero non è intero");
  } else if (x > 9){
    console.log("non compreso tra 0 e 9");
  }
}
console.log(loopUntil(2))

// ALTRIMENTI

// function loopUntil2(x) {
//   let contatore = 0;
//   while (contatore < 4) {
//     let numRandom = Math.floor(Math.random()*(9-0));
//     console.log(numRandom);
//     if (numRandom > x) {
//       contatore++;
//     } else {
//       contatore = 0;
//     }
//   }
// }
// console.log(loopUntil2(2))

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

let array2 = [5, 6, "Y", 13, "@", 10]

function average(arr) {
  let sum2 = 0;
  let counter2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum2 += arr[i];
      counter2++;
    }
  }
  return sum2 / counter2;
}

console.log(average(array2));



/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/
let stringArray = [
  "prima frase",
  "seconda frase",
  "frase piu lunga da riportare",
  "ultima frase"
]

function longest(arr) {
  let longestString = arr[0];
  for (i=0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    } 
  }
  return longestString;
}

console.log(longest(stringArray));



/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

function antiSpam(emailContent) {
  let check1 = "SPAM"
  let check3 = "spam"
  let check2 = "SCAM"
  let check4 = "scam"
  let isSpamOrScam = true;
  if (emailContent.includes(check1 || check2 || check3 || check4)) {
    isSpamOrScam = false;
  } 
  return isSpamOrScam
}
console.log(antiSpam("la mia email è pulita SPAM"));


/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

function calcDate(data) {
  let today = new Date();
  let dateSince = new Date(data)
  let diff = today - dateSince
  
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
console.log(calcDate("2023-01-13"))



/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {
  matrix = [];
  for (i=0;i < x; i++) {
      for (row=0 ; row < y; row++) {
          matrix.push('' + i + row );
      }
  }
  return matrix;
}
console.log(matrixGenerator(3, 4));
