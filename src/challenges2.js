// Desafio 11
function testa3(number) {
  let valor = 0;
  let cont = 0;
  for (let index in number) {
    valor = number[index];
    cont = 0;
    for (let index2 in number) {
      if (valor === number[index2]) {
        cont += 1;
      }
    }
    if (cont >= 3) {
      return true;
    }
  }

  return false;
}

function generatePhoneNumber(number) {
  let formated = [];

  if (number.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index in number) {
    if (number[index] < 0 || number[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (testa3(number)) { return 'não é possível gerar um número de telefone com esses valores'; }

  formated.push('(');
  formated.push(number[0]);
  formated.push(number[1]);
  formated.push(')');
  formated.push(' ');

  for (let index = 2; index <= 6; index += 1) { formated.push(number[index]); }
  formated.push('-');

  for (let index = 7; index <= 10; index += 1) { formated.push(number[index]); }

  formated = formated.join('');

  return formated;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let test1 = false;
  let test2 = false;
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineB + lineA)) {
    test1 = true;
  }
  if ((lineA > Math.abs(lineB - lineC)) && (lineB > Math.abs(lineA - lineC)) && (lineC > Math.abs(lineB - lineA))) {
    test2 = true;
  }
  if (test1 && test2) {
    return true;
  } return false;
}

// Desafio 13
function hydrate() {

}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
