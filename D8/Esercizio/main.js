// 21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"

x = "Jhon"
y = "Doe"
console.log(x + " <> " + y);

// 22) Crea un oggetto con le seguenti proprietà: name, surname, email

let object = {
    name: "Alessio",
    surname: "Toninello",
    email: "alessio.toninello@gmail.com"
}

//  23) Cancella la proprietà email dall'oggetto appena creato

delete object.email;
console.log(object);

// 24) Crea un array contenente 10 stringhe

let array = ["1","due","tre","4","5","sei","sette","otto","9","10"]

// 25) Mostra in console ogni stringa del precedente array

console.log(array);

// 26) Crea un array contenente 100 numeri random

let arrayRandom = []

function getRandomNumbers(min, max) {
    for (let i = 0; i < 100; i++) {
        arrayRandom.push(Math.floor(Math.random() * (max - min) + min))        
    }
}
getRandomNumbers(1, 350)
console.log(arrayRandom);


// 27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato

let arrayMax
let arrayMin

function findMaxAndMin() {
    arrayMax = Math.max(...arrayRandom)
    arrayMin = Math.min(...arrayRandom)
}
findMaxAndMin()
console.log(arrayMax, arrayMin);

// 28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random

arrayFather = [
    [1,2,3,4,5,6,7,8,9,10],
    [11,12,13,14,15,16,17,18,19,20],
    [21,22,23,24,25,26,27,28,29,30],
    [31,32,33,34,35,36,37,38,39,40],
    [41,42,43,44,45,46,47,48,49,50],
    [51,52,53,54,55,56,57,58,59,60],
    [61,62,63,64,65,66,67,68,69,70],
    [71,72,73,74,75,76,77,78,79,80],
    [81,82,83,84,85,86,87,88,89,90],
    [91,92,93,94,95,96,97,98,99,100] 
]
console.log(arrayFather);

// 29) Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi

let arr1 = [1,2,3,4,5,6,7,8,9,10]
let arr2 = ["ciao","hola","hasta luego"]

function longestArray(first, second) {
    if (first.length > second.length) {
        return first
    } else {
        return second
    }
}
console.log(longestArray(arr1,arr2))


// 30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore

let array1 = [1.2,3,4,5,6,7,8,9,10]
let array2 = [11,12,13,14,15,16,17,18,19,20]

function higherSumArray(first, second) {
    let firstSum = 0
    let secondSum = 0

    for (const i of first) {
        firstSum = firstSum + i
    }
    for (const y of second) { 
        secondSum = secondSum + y
    }
    if (firstSum > secondSum) {
        console.log(firstSum)
        return first
    } else {
        console.log(secondSum)
        return second
    }
}

higherSumArray(array1, array2)


////////////////////////////////////////////////////

// ESERCIZI SUL DOM

// 31) Seleziona l'elemento con id "container" nella pagina

const myElement = document.getElementById("container")

// 32) Seleziona tutti gli elementi di tipo <td> nella pagina

const myElement1 = document.getElementsByTagName("td")

// 33) Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td> nella pagina

for (let i of myElement1) {
    console.log(i.innerHTML)
}


// 34) Scrivi una funzione per cambiare il titolo della pagina

document.querySelector("h1").innerHTML = "Nuovo titolo"

// 35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina

function addNewRow() {
    let table = document.querySelector('table');
    let newRow = document.createElement('tr');

    let cell1 = document.createElement('td');
    cell1.textContent = 'cella vuota 1';
    let cell2 = document.createElement('td');
    cell2.textContent = 'cella vuota 2';

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    table.appendChild(newRow);
}

addNewRow()



// 36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella
// 37) Scrivi una funzione per aggiungere uno sfondo rosso a ogni link presente nella pagina
// 38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi
// 39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina
// 40) Scrivi una funzione per svuotare una lista nella pagina