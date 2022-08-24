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

