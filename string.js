 const stringLength=(string)=> {
  const length = string.split('').length;
  if(length <1 || length >10){
  throw new Error('The string length does not meet the requirements.');
  }
  else {
  return length;
  }
  }
  
  module.exports = stringLength;