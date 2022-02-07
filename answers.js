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


// function GCD(n1, n2) {
//   var number;
//   var gcd = 1;

//   if (n1 < n2) {
//     number = n1;
//   } else {
//     number = n2;
//   }

//   for (i = 1; i <= number; i++) {
//     if (n1 % i == 0 && n2 % i == 0) {
//       gcd = i;
//     }
//   }
//   console.log(`Greatest common divisor of ${n1} and ${n2} is ${gcd}.`);
// }
// GCD(16, 48);
