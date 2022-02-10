// !First   Question
// let total = 0
// let number = +prompt('Please enterr a number')
// for (  i = 1; i < number; i++) {
//     if( number % i == 0){
//         total += i
//     }

// }
// if ((number == total)) {
//   console.log(`${number} is a perfect number`);
// } else {
//     console.log(`${number} is not a perfect number`);
// }
// *************************************
// function isPerfect(n) {
//     let sum = 0
//     for(i=0; i<n;i++){
//         if(n % i == 0){
//             sum += i
//         }
//     }
//     if(n == sum){
//         console.log(`${n} is a perfect number`);
//     }
//     else{
//         console.log(`${n} is not a perfect number`);
//     }

// }

// isPerfect(6)

// !SECOND QUESTION

// mail = "mailto: Clarusway admission@clarusway.com, 6 Haz 2021 Paz, 21:08 tarihinde şunu yazdı:"
// Write javascript code that outputs "clarusway.com" from the string in the "mail" variable.
// Expected Output: clarusway.com (edited)

// let mail = "mailto: Clarusway admission@clarusway.com;"
// let output = mail.slice(mail.indexOf('c'), mail.indexOf(','));
// console.log(output);

function GCD(n1, n2) {
  let number;
  let gcd = 1;
  if (n1 < n2) {
    number = n1;
  } else {
    number = n2;
  }

  for (i = 1; i <= number; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      gcd = i;
    }
  }
  console.log(`Greatest common divisor of ${n1} and ${n2} is ${gcd}.`);
}
GCD(16, 48);

let foo = 1;
function sayHello() {
  var foo = "Hello";
  console.log(foo);
}
console.log(sayHello());
console.log(foo);

let liste = [1, 2, 3, 4, 5, "bir", "iki", "üc", "dört", "bes"];
console.log(typeof liste);
console.log(liste);

for (i = 0; i < liste.length; i++) {
  console.log("Hello");
}

for (i in liste) {
  console.log(liste[i]);
}


// *************FOURTHQUESTION******************

// Write a Python/JavaScript code that counts how many vowels and constants a string has that a user entered.

const countLetter = () => {
  let string = prompt("Please enter your expressinon").toLowerCase();
  let countVovel = 0;
  let countConstant = 0;
  const vovel = "aeioöuü";
  const constant = "bcdfghlklmnpqrstvwxyz";
  for (letter of string) {
    if (vovel.includes(letter)) {
      countVovel++;
    } else if (constant.includes(letter)) {
      countConstant++;
    }
  }
  console.log(`The number of vovel ist : ${countVovel}`);
  console.log(`The number of constant ist : ${countConstant}`);
};

countLetter();