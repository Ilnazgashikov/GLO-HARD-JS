let num = 266219;
let strNumLenght = num.toString().length;
let transform = 1;
for (let i = 0; i < strNumLenght; i++) {
  transform = transform * (num % 10);
  num = Math.trunc(num / 10);
}
console.log(transform);
console.log(transform ** 3);
console.log(String(transform).slice(0, 2));