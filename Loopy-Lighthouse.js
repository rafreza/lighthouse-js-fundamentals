for (let num = 100; num <= 200; num ++){
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  else if (num % 3 === 0) {
    console.log("Loopy");
  }
  else if (num % 4 === 0) {
    console.log("Lighthouse");
  }
  else {
    console.log(num);
  }
}

const loopyLighthouse = (range, multiples, words) => {
  for (let num = range[0]; num <= range[1]; num++) {
    if(num % multiples[0] === 0 && num % multiples[1] === 0) {
      console.log(`${words[0]}${words[1]}`);
    }
    else if (num % multiples[0] === 0) {
      console.log(`${words[0]}`);
    }
    else if (num % multiples[1] === 0) {
      console.log(`${words[1]}`);
    }
    else {
      console.log(num);
    }
  }

}