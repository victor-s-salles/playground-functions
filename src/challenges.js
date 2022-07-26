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
  let bigNumber = -100;
  let cont = 0;

  for (let index in numbers) {
    if (numbers[index] > bigNumber) {
      bigNumber = numbers[index];
    }
  }
  for (let index in numbers) {
    if (bigNumber === numbers[index]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } if ((Math.abs(cat2 - mouse)) === (Math.abs(cat1 - mouse))) {
    return 'os gatos trombam e o rato foge';
  } if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  let retorno = [];

  for (let index in numbers) {
    if ((numbers[index] % 3) === 0) {
      retorno[index] = 'fizz';
    } else if ((numbers[index] % 5) === 0) {
          retorno[index] = 'buzz'; 
        } else retorno[index] = 'bug!';
    if(((numbers[index] % 3) === 0) && ((numbers[index] % 5) === 0)){
      retorno[index] += 'Buzz';
    }  
  
  }
  return retorno;
}

console.log(fizzBuzz([9, 25, 15]));

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
