function getMaxDigitNumber(inData){
  inData = String(inData);
  if (!+inData){
    return 0;
  }
  let numbers = inData.split('');
  let maxValue = +numbers[0];
  for (let i = 1; i < numbers.length; i++){
    if(maxValue < +numbers[i]){
      maxValue = +numbers[i];
    }
  }

  return maxValue;
}

// ----- Under construction
function getPowOfNumber(number){
  number = +number
  if (!inData){
    return 0;
  }
}

function formateName(name){
  name = String(name);
  if (!name){
    return "";
  }

  let letters = name.split('');

  letters[0] = letters[0].toUpperCase();
  for(let i = 1; i < letters.length; i++){
    letters[i] = letters[i].toLowerCase();
  }
  return letters.join('');
}

console.log(formateName("1DAAsdVV"))