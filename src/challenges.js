// Desafio 1
function compareTrue(numberOne,numberTwo) {
  if (numberOne % 2 == 0 && numberTwo % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

// Desafio 2
function calcArea(base,height) {
  let calculo = (base * height) / 2;
  return calculo;
};

// Desafio 3
function splitSentence() {
  let string = "Vamo que vamo";
  let separator = " ";
  let result = string.split(separator);
  return result;
  /** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
};

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
};

// Desafio 5
function footballPoints(wins, ties) {
  teamPoints = (wins * 3) + (ties * 1);
  return teamPoints;
};

// Desafio 6
function highestCount(arr) {
  let max = arr[0];
  let repeticao = 0;
  for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] >= max) {
   max = arr[i];
   }
  }
  for (let j = 0; j < arr.length; j += 1) {
  if (arr[j] === max) {
  repeticao += 1;
  }
  }
  return repeticao;
};
 
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrBuzz) {
  let buzzResult = [];
  for (let i = 0; i < arrBuzz.length; i += 1) {
    if (arrBuzz[i] % 3 === 0 && arrBuzz[i] % 5 === 0) {
     buzzResult.push("fizzBuzz");
    } else if (arrBuzz[i] % 3 === 0) {
     buzzResult.push("fizz");
    } else if (arrBuzz[i] % 5 === 0) {
     buzzResult.push("buzz");
    } else {
     buzzResult.push("bug!");
    }
   }
    return buzzResult;
  };
  
// Desafio 9
function encode(phrase) {
  let newPhrase = phrase.replace(/a/gi, 1).replace(/e/gi, 2).replace(/i/gi, 3).replace(/o/gi, 4).replace(/u/gi, 5);
  return newPhrase;
  }
function decode(newPhrase) {
  let phrase = newPhrase.replace(/1/gi, "a").replace(/2/gi, "e").replace(/3/gi, "i").replace(/4/gi, "o").replace(/5/gi, "u");
  return phrase;
/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace */
};

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

