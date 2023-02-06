// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

// ALGORITMO
const prices = [34, 45, 2]
const shippingCost = 50

let totalCart = 0;
for (let i of prices) {
  totalCart += i; 
}
console.log("Totale carrello: ", totalCart);


// CARRELLO MAGGIORE DI 100?
if (totalCart < 100) {
  totalCart = totalCart + shippingCost;
} 
console.log("costo di spedizione: ", totalCart);

if (marco.isAmbassador) {
  totalCart = totalCart * 0.7;
  console.log(marco.name, marco.lastName, "ha diritto al 30% di sconto. \n Nuovo totale: ", totalCart);
  totalCart = totalCart + shippingCost;
  console.log("Compreso di spedizione: ", totalCart);
}

/* rifallo tutto perche devi comprendere bene tutte le dinamiche, prova a farlo a modo tuo!! */ 
