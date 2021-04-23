function range(start, end, step){
  let finalRange = [];
  if (isNaN(start, end, step) || start > end || step <= 0){
    return finalRange;
  }
  else {
    for (let i = start; i <= end; i += step){
      finalRange.push(i);
    }
    return finalRange;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));