let sum = 0;
let args = process.argv.length;
for (i = 2; i < args; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum);
