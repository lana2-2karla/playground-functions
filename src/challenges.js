// Desafio 1
function compareTrue(numberOne, numberTwo) {
  if (numberOne === true && numberTwo === true) {
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
function splitSentence(stringTrybe) {
  let separator = " ";
  let result = stringTrybe.split(separator);
  return result;
  /** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
};

// Desafio 4
function concatName(array1) {
  let arrayNew = [];
  let reverso = array1.reverse();
  if (reverso[0] && reverso.length-1) {
    arrayNew.push(reverso[0] + ", " + reverso[reverso.length-1]);
  }
  /** Refêrencia modo de uso length: https://pt.stackoverflow.com/questions/87416/como-retornar-o-%C3%BAltimo-registro-de-um-array-com-javascript-ou-jquery */
  return arrayNew.toString();
  /** Refêrencia Array.prototype.toString(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/toString */
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
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if (distanceCat2 < distanceCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }

};

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

