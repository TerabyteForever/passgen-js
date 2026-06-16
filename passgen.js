/**
 * Random Password Generator
 * Copyright (c) 2026 - Terabyte Forever
 */
import read from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import Random from 'node:crypto';

const asciiArray = Array.from({ length: 94 }, (_, index) => String.fromCharCode(index + 33));
const rl = read.createInterface({input, output});

console.log("Random password generator\n\nCopyright (c) 2026 - Terabyte Forever");

var passwordLength = 16;

const answer = await rl.question(`Password length (${passwordLength}): `);
if(answer){
    passwordLength = parseInt(answer);
}
rl.close();

var strPassword = "";

for (let i=0; i<passwordLength; i++) {
    strPassword += asciiArray[Random.randomInt(0,asciiArray.length)];
}
console.log("\n\u001b[33mYour password is:\u001b[0m");
console.log(`${strPassword}\n`);
