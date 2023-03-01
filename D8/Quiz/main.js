const questions = [
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What does CPU stand for?',
      correct_answer: 'Central Processing Unit',
      incorrect_answers: [
        'Central Process Unit',
        'Computer Personal Unit',
        'Central Processor Unit',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
      correct_answer: 'Final',
      incorrect_answers: ['Static', 'Private', 'Public'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'The logo for Snapchat is a Bell.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question:
        'Pointers were not used in the original C programming language; they were added later on in C++.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What is the most preferred image format used for logos in the Wikimedia database?',
      correct_answer: '.svg',
      incorrect_answers: ['.png', '.jpeg', '.gif'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'In web design, what does CSS stand for?',
      correct_answer: 'Cascading Style Sheet',
      incorrect_answers: [
        'Counter Strike: Source',
        'Corrective Style Sheet',
        'Computer Style Sheet',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What is the code name for the mobile operating system Android 7.0?',
      correct_answer: 'Nougat',
      incorrect_answers: [
        'Ice Cream Sandwich',
        'Jelly Bean',
        'Marshmallow',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'On Twitter, what is the character limit for a Tweet?',
      correct_answer: '140',
      incorrect_answers: ['120', '160', '100'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Linux was first created as an alternative to Windows XP.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'Which programming language shares its name with an island in Indonesia?',
      correct_answer: 'Java',
      incorrect_answers: ['Python', 'C', 'Jakarta'],
    },
  ]

let userScore = 0

function confermaPrimaRisposta() {

  let primaRisposta = document.querySelector("#first-answer")
  let secondaRisposta = document.querySelector("#second-answer")
  let terzaRisposta = document.querySelector("#third-answer")
  let quartaRisposta = document.querySelector("#four-answer")

  let userAnswer = ""

  if (primaRisposta.checked) {
    userAnswer = primaRisposta.value 
  } else if (secondaRisposta.checked) {
    userAnswer = secondaRisposta.value 
  } else if (terzaRisposta.checked) {
    userAnswer = terzaRisposta.value 
  } else if (quartaRisposta.checked) {
    userAnswer = quartaRisposta.value 
  } else {
    alert("Seleziona una risposta")
    return
  }

  let correctAnswer = questions[0].correct_answer.toLowerCase().replaceAll(" ","-")
  
  if (userAnswer === correctAnswer) {
    userScore += 1
    alert("Risposta Corretta!")
  } else {
    alert("Risposta Sbagliata!")
  }

  console.log("1/10 Domande - Punteggio: ",userScore);
  const removeAnswer = document.getElementById("container-one");
  removeAnswer.style.display = "none";
}

function confermaSecondaRisposta() {

  let primaRisposta = document.querySelector("#first-answer2")
  let secondaRisposta = document.querySelector("#second-answer2")
  let terzaRisposta = document.querySelector("#third-answer2")
  let quartaRisposta = document.querySelector("#four-answer2")

  let userAnswer = ""

  if (primaRisposta.checked) {
    userAnswer = primaRisposta.value 
  } else if (secondaRisposta.checked) {
    userAnswer = secondaRisposta.value 
  } else if (terzaRisposta.checked) {
    userAnswer = terzaRisposta.value 
  } else if (quartaRisposta.checked) {
    userAnswer = quartaRisposta.value 
  } else {
    alert("Seleziona una risposta")
    return
  }

  let correctAnswer = questions[1].correct_answer.toLowerCase().replaceAll(" ","-")
  
  if (userAnswer === correctAnswer) {
    userScore += 1
    alert("Risposta Corretta!")
  } else {
    alert("Risposta Sbagliata!")
  }

  console.log("2/10 Domande - Punteggio: ",userScore);
  const removeAnswer = document.getElementById("container-two");
  removeAnswer.style.display = "none";
}

function confermaTerzaRisposta() {

  let primaRisposta = document.querySelector("#first-answer3")
  let secondaRisposta = document.querySelector("#second-answer3")
  let terzaRisposta = document.querySelector("#third-answer3")
  let quartaRisposta = document.querySelector("#four-answer3")

  let userAnswer = ""

  if (primaRisposta.checked) {
    userAnswer = primaRisposta.value 
  } else if (secondaRisposta.checked) {
    userAnswer = secondaRisposta.value 
  } else {
    alert("Seleziona una risposta")
    return
  }

  let correctAnswer = questions[2].correct_answer.toLowerCase().replaceAll(" ","-")
  
  if (userAnswer === correctAnswer) {
    userScore += 1
    alert("Risposta Corretta!")
  } else {
    alert("Risposta Sbagliata!")
  }

  console.log("3/10 Domande - Punteggio: ",userScore);
  const removeAnswer = document.getElementById("container-three");
  removeAnswer.style.display = "none";
}

function confermaQuartaRisposta() {

  let primaRisposta = document.querySelector("#first-answer4")
  let secondaRisposta = document.querySelector("#second-answer4")

  let userAnswer = ""

  if (primaRisposta.checked) {
    userAnswer = primaRisposta.value 
  } else if (secondaRisposta.checked) {
    userAnswer = secondaRisposta.value 
  } else {
    alert("Seleziona una risposta")
    return
  }

  let correctAnswer = questions[3].correct_answer.toLowerCase().replaceAll(" ","-")
  
  if (userAnswer === correctAnswer) {
    userScore += 1
    alert("Risposta Corretta!")
  } else {
    alert("Risposta Sbagliata!")
  }

  console.log("4/10 Domande - Punteggio: ",userScore);
  const removeAnswer = document.getElementById("container-four");
  removeAnswer.style.display = "none";
}





// - Copiare ed incollare tutte le domande e tutte le relative funzioni (COPIA SEMPRE LA PRIMA DOMANDA SIA PER "DOMANDA E RISP" CHE PER "FUNZIONI" --> POI MODIFICA DI CONSEGUENZA)
// - Ovviamente sostituire le parti necessarie (domande, risposte, ID, classi, nomi funzioni ecc ecc)
// - Arrivato all'ultima domanda, aggiungi il seguente codice per fare sparire tutte le domande:
//  let removeBox = document.getElementById("quizBox")
//  removeBox.style.display = "none"

//  - Al suo posto metti delle frasi di congratulazioni e dire se l'utente è promosso oppure no! (oltre a mostrare il suo punteggio!)

