/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (x,y) {
    return x * y;
}

console.log(area(10,20));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum (x1,y1) {
    if (x1 === y1) {
        return (x1 + y1) * 3;
    } else {
        return x1 + y1;
    }
}
console.log(crazySum(10,11));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(int1,int2) {
    if (int1 == parseInt(int1) && int2 == parseInt(int2)){
        return Math.abs(int1 - int2) > 19 ? Math.abs(int1 - int2)*3 : Math.abs(int1 - int2);
    }else{
        return "i valori non sono numeri interi" ;
    }
}
console.log(crazyDiff(32,19));



/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary (x3) {
    if (x3 > 20 && x3 <= 100) {
        return true
    } else if (x3 === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(32));


/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(str) {
    if (str.startsWith("code")) {
        return str
    } else {
        return "code" + str
    }
} 
console.log(codify(" prova del codice"))



/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(c5) {
    if ((c5 > 0) && (c5 % 1 === 0)) {
        if ((c5 % 3 === 0) || (c5 % 7 === 0)) {
            return true 
        } else {
            return false
        }
    } else {
        return "il numeno è zero o minore oppure float"
    }
}
console.log(check3and7(3));

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(str2) {
    let splitStr = str2.split("");
    let reverseStr = splitStr.reverse();
    let joinStr = reverseStr.join("")
    return joinStr
}

console.log(reverseString("Alessio"))


/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(str3){
    if (str3){
        let words = str3.split(" ");
        for(i=0; i<words.length; i++){
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    }
}
console.log(upperFirst("ciao epicoderz, a domani!"));


/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

// function cutString(str4) {
//     let words2 = str4.split("");
//     for(i=0; i<words2.length; i++){
        

//     }
//     return words.join("");

// }


/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
