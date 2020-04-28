// Your code here
function mapToNegativize(sourceArray){
  newArray = [];
  for(let i = 0;i<sourceArray.length;i++){
    newArray.push(sourceArray[i]*-1);
  }
  return newArray;
}
function mapToNoChange(sourceArray){
  newArray = [];
  for(let i = 0;i<sourceArray.length;i++){
    newArray.push(sourceArray[i]);
  }
  return newArray;
}
function mapToDouble(sourceArray){
  newArray = [];
  for(let i = 0;i<sourceArray.length;i++){
    newArray.push(sourceArray[i]*2);
  }
  return newArray;
}
function mapToSquare(sourceArray){
  newArray = [];
  for(let i = 0;i<sourceArray.length;i++){
    newArray.push(sourceArray[i]*sourceArray[i]);
  }
  return newArray;
}
function reduceToTotal(sourceArray, startingPoint){
  for(let i = 0;i<sourceArray.length;i++){
    startingPoint += sourceArray[i];
  }
  return startingPoint;
}
