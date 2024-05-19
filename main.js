"use strict";

const arr = ['325', '26', '755', '104', '47', '789', '377'];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}

nextNum:
for (let i = 2; i <= 100; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextNum; 
  }
  console.log("Делители этого числа 1 и " + i);
}