// Desafio 11
function generatePhoneNumber() {
  

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let test1 = false;
  let test2 = false
  if((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineB + lineA)) {
    test1 = true;
  }

  if((lineA > Math.abs(lineB - lineC)) && (lineB > Math.abs(lineA - lineC)) && (lineC > Math.abs(lineB - lineA))){
    test2 = true;
  }

  if(test1 && test2){
    return true
  } else return false

}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
