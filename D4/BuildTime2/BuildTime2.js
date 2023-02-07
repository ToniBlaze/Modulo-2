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
const prices = [34, 65, 2]
const shippingCost = 50

let totalCart = 0;
for (let i of prices) {
  totalCart += i; 
}
console.log("Totale carrello: ", totalCart);

    
if (marco.isAmbassador) {
  let totalCartMarco = totalCart * 0.7
  console.log(marco.name, marco.lastName, "ha diritto al 30% di sconto. \n Nuovo totale: ", totalCartMarco);
    if (totalCartMarco < 100) {
      totalCartMarco = totalCartMarco + shippingCost;
    }  console.log("Per Marco \n Carrello + spedizione: ", totalCartMarco);
}

if (paul.isAmbassador) {
  let totalCartPaul = totalCart * 0.7
  console.log(paul.name, paul.lastName, "ha diritto al 30% di sconto. \n Nuovo totale: ", totalCartPaul);
} else { let totalCartPaul = totalCart;
    console.log(paul.name, paul.lastName, "NON ha diritto allo sconto. \n Totale Carrello: ", totalCartPaul);
    if (totalCartPaul < 100) {
      totalCartPaul = totalCartPaul + shippingCost;
    }  console.log("Per Paul \n Carrello + spedizione: ", totalCartPaul);
}
     
if (amy.isAmbassador) {
  let totalCartAmy = totalCart * 0.7
  console.log(amy.name, amy.lastName, "ha diritto al 30% di sconto. \n Nuovo totale: ", totalCartAmy);
} else { let totalCartAmy = totalCart;
    console.log(amy.name, amy.lastName, "NON ha diritto allo sconto. \n Totale Carrello: ", totalCartAmy);
    if (totalCartAmy < 100) {
      totalCartAmy = totalCartAmy + shippingCost;
    }  console.log("Per Amy  \n Carrello + spedizione: ", totalCartAmy);
}
     

