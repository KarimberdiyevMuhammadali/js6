// func1


// let a = 3;
// let b = 8;

// function power(a, n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return a * power(a, n - 1);
//     }
// }


// console.log(power(a, b)); 


// func2


// function mean(a, b) {


//     let A = (a + b) / 2;

//      let B = Math.sqrt(a * b);

//     return {
//         A: A,
//         B: B
//     };

// }
// let result = (mean(12,48));

// console.log("Middle arifmetik:", result.A);
// console.log("Middle geometrik:", result.B);



// func3

// function sign(n) {
//     return (n > 0) - (n < 0);
// }

// console.log(sign(0)); 

// func5

// function areaCircle(R) {

//     return Math.PI * R * R;
// }

// let radius = 5;
// let  arrea = areaCircle(radius);
// console.log("Doiraning yuzi:", arrea);



// func6

// function moneyR(A, B) {
//     if (A > B) {
//         return 0;
//     }

//     return A + moneyR(A + 1, B);
// }
// console.log(moneyR(8 , 10));


// func7

// function kalkulyator(a, b, c) {
//     switch (c) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return b !== 0 ? a / b : 0;
//         default:
//             return 0;
//     }
// }

// console.log(kalkulyator(5, 3, '+'));



// func8

// function juft(A) {
//     return A % 2 === 0;
// }


// console.log(juft(4)); 


// func9

// function sortABC(a, b, c) {
    
//     let engKichik = Math.min(a, b, c);

//     let orta = (a + b + c) - Math.max(a, b, c) - engKichik;

//     let engKatta = Math.max(a, b, c);

//     console.log("Eng kichik:", engKichik);
//     console.log("O'rtacha:", orta);
//     console.log("Eng katta:", engKatta);
// }
// sortABC(5, 12, 8);

// func10

// function isPowerN(K, N) {
//     if (K <= 0 || N <= 0) {
//         return false;
//     }

//     while (K > 1) {
//         if (K % N !== 0) {
//             return false;
//         }
//         K = K / N;
//     }

//     return true;
// }

// console.log(isPowerN(8, 2));


// func11

// function isPrime(N) {
//     if (N <= 1) {
//         return false;
//     }

//     if (N === 2) {
//         return true;
//     }
//     for (let i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPrime(7)); 

// func12

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }

//     if (number === 2) {
//         return true;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function PraymlarSoni(N) {
//     let count = 0;

//     for (let i = 2; i <= N; i++) {
//         if (isPrime(i)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(PraymlarSoni(10));



// func13

// function digitCount(son) {
//     return son.toString().length;
// }

// function digitNth(K, N) {
//     const kdcount = digitCount(K);

//     if (N > kdcount) {
//         return -1; 
//     }

//     const ka = K.toString();
//     const digitalson = parseInt(ka.charAt(N - 1));

//     return digitalson;
// }

// console.log(digitNth(105782, 5)); 



// func14

// function inverseNumber(N) {
//     if (N < 0) {
//         return -1; 
//     }

//     let teskariqilinganSon = 0;
//     let xaqiqiySon = N;

//     while (xaqiqiySon > 0) {
//         const oxirgison = xaqiqiySon % 10;
//         teskariqilinganSon = teskariqilinganSon * 10 + oxirgison;
//         xaqiqiySon = Math.floor(xaqiqiySon / 10);
//     }

//     return teskariqilinganSon;
// }

// console.log(inverseNumber(12345));

// func15

// function isPalindrome(N) {
//     if (N < 0) {
//         return false; 
//     }

//     const numberString = N.toString();
//     const A = numberString.length;

//     for (let i = 0; i < Math.floor(A / 2); i++) {
//         if (numberString[i] !== numberString[A - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPalindrome(121));   




// func16

// function factorial(N) {
//     if (N < 0) {
//         return 1;
//     }

//     let result = 1;

//     for (let j = 1; j <= N; j++) {
//         result *= j;
//     }

//     return result;
// }

// console.log(factorial(5));

// func17

// function getSum3(N) {
//     let som = 0;

//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0) {
//             som += i;
//         }
//     }

//     return som;
// }

// console.log(getSum3(10));


// func18

// function somtoqjust(N) {
//     let =somToq = 0;
//     let =somJuft = 0;

//     for (let i = 1; i <= N; i++) {
//         if (i % 2 === 0) {
//             somJuft += i;
//         } else {
//             somToq += i;
//         }
//     }

//     return { somToq, somJuft };
// }

// const result = somtoqjust(10);
// console.log("Yig'indisi toq sonlar:", result.somToq);
// console.log("Yig'indisi juft sonlar:", result.somJuft);


// func19

// function invertTime(H, M, S) {
//     let jamisecondlar = H * 3600 + M * 60 + S;
//     let teskariSoatlar = Math.floor(jamisecondlar / 3600);
//     let teskariMinutlar = Math.floor((jamisecondlar % 3600) / 60);
//     let teskariSecondlar = jamisecondlar % 60;
//     return { teskariSoatlar, teskariMinutlar, teskariSecondlar };
// }
// let result = invertTime(0, 6, 40);
// console.log(" soat:", result.teskariSoatlar);
// console.log("minut:", result.teskariMinutlar);
// console.log("sekund:", result.teskariSecondlar);


// func20


