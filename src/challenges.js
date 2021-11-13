// Desafio 1
function compareTrue(numberOne,numberTwo) {
  if (numberOne % 2 == 0 && numberTwo % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence() {
  let string = "Vamo que vamo";
  let separator = " ";
  let result = string.split(separator);
  return result;
  /** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
}

// Desafio 4
function concatName() {
  let array1 = ["foguete", "não" , "tem", "ré"];
  let reverso = array1.reverse();
  let final = reverso[0] + "," + reverso[3];
  return final;
  /**
 * Consultei o repositório do Álvaro Ramos para resolver essa parte.
 * https://github.com/tryber/sd-018-b-project-playground-functions/pull/31/commits/91659a74295dfdfd30c1b45247fe5241606f57b3
 */
}

// Desafio 5
function footballPoints(wins, ties) {
  teamPoints = (wins * 3) + (ties * 1);
  return teamPoints;
}

// Desafio 6
function highestCount() {
  
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
};
