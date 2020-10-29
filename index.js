function flip(repeat){

for (let i = 0; i < repeat; i++){

var coinFlip = Math.round(Math.random());

if (coinFlip === 1){
  console.log('heads');
}

if (coinFlip === 0){
  console.log('tails');
}
}
}

flip(20); 