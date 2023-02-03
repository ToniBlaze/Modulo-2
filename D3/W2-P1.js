/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let x = 10;
let y = 30;

if (x > y) {
console.log ("x è maggiore di y")
} else {
console.log ("y è maggiore di x")
}

/* ESERCIZIO 2 
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/ 
 
if (y !== 5) {
  console.log("not equal") 
  } else {
  console.log("equal")
  }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (y % 5 === 0) {
  console.log("divisible by 5")
  } else {
  console.log("not divisible by 5")
  }


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if (x === 8 || y === 8) {
console.log("uno dei due numeri è 8") 
} else if (x+y === 8 || x-y === 8 || y-x === 8) {
console.log("la somma o sottrazione tra i due numeri è 8")
} else {
console.log("nessun numero è 8 ed la loro somma/sottrazione non è 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 52

if (totalShoppingCart <= 50) {
  totalShoppingCart += 10;
  console.log("Costo spedizione: 10€ ---  Totale carrello: ",totalShoppingCart);
} else {
  console.log("Spedizione Inclusa! Totale carrello: ",totalShoppingCart);
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let cartDicount = totalShoppingCart * 0.8;
console.log("Carrello scontato: ",cartDicount)

if (cartDicount <= 50) {
  cartDicount += 10;
  console.log("Costo spedizione: 10€ \n Totale carrello: ",cartDicount);
} else {
  console.log("Spedizione Inclusa! \n Totale carrello: ",cartDicount);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let array = [48, 69, 8]

array.sort(function(a, b) {
  return a - b;
});
console.log(array);

/* ALTRIMENTI... */

let a = 5;
let b = 90;
let c = 21;



if (a < c && a < b ) {
  console.log(a);
  if (c > b) {
    console.log(b);
    console.log(c);
  }else{
    console.log(c);
    console.log(b);
  }
}else if (a < c && a > b) {
  console.log(b);
  if (c > b) {
    console.log(b);
    console.log(c);
  }else{
    console.log(c);
    console.log(b);
  }
}else if (a < b && a > c){
  console.log(c);
  if (a > b) {
    console.log(b);
    console.log(a);
  }else{
    console.log(a);
    console.log(b);
  }
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

if (a % 1 === 0) {
  console.log("il numero è INTERO");
} else {
  console.log("il numero è DECIMALE");
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (a % 2 === 0) {
  console.log("il numero è PARI");
} else {
  console.log("il numero è DISPARI");
}




/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }  
*/

let val = 4
if (val < 10) {
  if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Meno di 10");
  }
} else {
  console.log("Uguale a 10 o maggiore");
}


/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 46
if (num < 5) {
  console.log("Tiny");
} else if (num >= 5 && num < 10) {
  console.log("Small");
} else if (num >= 10 && num < 15) {
  console.log("Medium");
} else if (num >= 15 && num < 20){
  console.log("Large");
} else {
  console.log("Huge");
}

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

isMale = true
let gender = isMale ? "male" : "female"
console.log(gender)



/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

let i = 0
while (i <= 5) {
  console.log(i);
  i++ 
} 



/* ESERCIZIO 14   
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

for (let i = 0; i <= 10; i++) {
  console.log(i);
} 


/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
	continue;
	}  console.log(i); 
} 


/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i2 = 0; i2 <= 15; i2++) {
	if (i2 % 2 === 0) {
	console.log(i2, "il numero è PARI");
	} else {
	console.log(i2, "il numero è DISPARI");
	} 
}


/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i=0; i<=100; i++) {
  if(i%15 == 0){
    console.log('FizzBuzz');
  } else if(i%5 == 0) {
    console.log('Buzz');
  }else if(i%3 == 0) {
    console.log('Fizz');
  } else if(i%5 != 0 && i%3 != 0 && i%15 != 0) {
    console.log(i);
  }
}

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

let day = 5
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
     console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
  case 7:
    console.log("Sunday");
    break;
}