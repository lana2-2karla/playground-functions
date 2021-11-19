// Desafio 10
function techList(arrList, name) {
  
  arrList.sort();
   let arrObject = [];
  for (let i = 0; i < arrList.length; i += 1) {
   arrObject.push({ tech: arrList[i], name});
  }
  if (arrList.length === 0) {
    return "Vazio!";
  } else {
    return arrObject;
  }
};
  
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
