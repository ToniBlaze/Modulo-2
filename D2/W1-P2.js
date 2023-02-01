/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I datatype principali sono Stringhe, Numerici, Booleani, undefined e null.
    Stringhe: i valori sono lettere, parole o frasi ed anche numeri (non usabili per fare calcoli) e si scrivono con gli apici singoli o doppi. 
                Per mettere un valore vuoto si mettono solo gli apici ("")

    Numerici: i valori sono numerici, possono essere interi o decimali. 
                Ci sono anche dei valori speciali, tipo quando il risultato è un numero non calcolabile (+Infinity/-Infinity) oppure quando il risultato non è un numero (Nan --> Not a Number)
    
    Booleani: i valori sono espressioni logiche, cioè il valore puo essere solo vero (TRUE) o falso (FALSE)

    Undefined: quando dichiari una variabile ma non la "inizializzi" --> let myVariable (il computer non sa che tipo di dato ci sia all'interno perche non c'è quindi "non è definita" )

    Null: il valore è "vuoto" oppure si usa per svuotare una variabile, è diverso da undefined perche in questo caso la variabile è vuota mentre in undefined non è proprio definita

    Oggetto: variabile che contiente caratteristiche e valori diversi tra loro, relativi allo stesso oggetto quindi richiamabili tramite "l'etichetta"

    Array: Variabile con all'interno dati non interrogabili tramite etichetta (come un elenco)
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto in Javascript è una variabile caratterizzata da varie proprietà, le quali hanno uno specifico valore.
    Per esempio: Un computer è composto da vari componenti hardware diversi, ed ogni computer è differente dagli altri. 
    Possiamo quindi considerare il computer un oggetto ed le sue caratteristiche (Ram,Memoria,Processore,Scheda grafica ecc..) come le sue proprietà.
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12 + 20
console.log("somma:", a);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Alessio"
console.log("nome:", name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4 - x
console.log(y);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"

console.log(name1 !== name2);

let name3 = name2.toLowerCase();

console.log(name1 === name3);


