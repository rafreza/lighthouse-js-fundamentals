function lastIndexOf (array, num){
  let index = -1;
  if (array.length > 0){
    for (let i = array.length - 1; i >= 0; i--){
      if (array[i] == num){
        index = i;
      }
    }
  }
  return index;
}