function seq3np1(n) {

  let sequence = "";
  while (n !== 1) {
    sequence += n + ", ";
    if (n % 2 === 0) {  // n is even 
      n = Math.floor(n / 2);
    }
    else {         // n is odd 
      n = n * 3 + 1;
    }
  }
  console.log(sequence + 1 + ".");
}

seq3np1(3);
seq3np1(16);
seq3np1(25);
seq3np1(13);