// Desafio 1
function compareTrue(teste1, teste2) {
  if (teste1 === true && teste2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  let separada = palavra.split(' ');
  return separada;
}

// Desafio 4
function concatName(names) {
  let concat = (`${names[names.length - 1]}, ${names[0]}`);
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  return wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let bigNumber = -1000;
  let cont = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > bigNumber) {
      bigNumber = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (bigNumber === numbers[index]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
