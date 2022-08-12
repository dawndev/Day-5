const prompt = require("prompt-sync")();
const angka1 = parseInt(prompt("Silahkan masukkan nilai angka pertama = "));
const angka2 = parseInt(prompt("Silahkan masukkan nilai angka kedua = "));
for (let i = angka1; i <= angka2; i++) {
  console.log(i);
}
