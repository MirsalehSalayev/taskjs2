//1.ikinin quvveti

// let n =parseInt(prompt())
// let n=32
// if (n < 1) {
    
//     // break;
//     }
//     while (n > 1) {
//         if(n % 2 ===1){
//             console.log(false)
//             // break;
//         }
//         n = n/2
//     console.log(true)
//     }
//n%2 sıfırdan fərqli olarsa və n 1 deyilsə,
//n 2-nin qüvvəti deyil. Əgər n 1 olarsa, 2-nin qüvvətidir.


//quvvet tapmaq
// let n =parseInt(prompt("eded"))
// let x =parseInt(prompt("quvveti"))
// let power = 1;
 
//     for (let i = 0; i < n; i++) {
//         power = power * x; 
//     }
 
//    console.log(power)

//4.cutlerin en boyuyu
// const array = [3, 1, 8, 4, 9, 2, 5, 7, 6];
// let bignumber = array[0]; 
// for (let i = 1; i < array.length; i++) {
//   if (array[i] > bignumber && array[i]%2===0) {
//     bignumber = array[i];
//   }
// }
// console.log(bignumber)


//tek ededlerin en kiciyinin indexi
// const array = [3, 1, 8, 4, 9, 2, 5, 7, 6];
// let bignumber = array[0]; 
// for (let i = 1; i < array.length; i++) {
//   if (array[i] < bignumber && array[i]%2!==0) {
//     bignumber = array[i];
//   }
// }
// console.log(array.indexOf(bignumber))

////// bunu tam al;nd;ra bilmedim
// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     if (num <= 3) {
//       return true;
//     }
//     if (num % 2 === 0 || num % 3 === 0) {
//       return false;
//     }
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
/// 1den 1000 e

let sum =0;
let hundr=0;
let ths=0
for(let i=0;i<100;i++){
    if(i%11===0){
        hundr+=i
    }
}
// console.log(hundr);
for(let i=1;i<1000;i++){
    if(i%111===0){
        ths+=i
    }
}
// console.log(ths);
console.log(ths+hundr)

//small+big
// const array = [3, 1, 8, 4, 9, 2, 5, 7, 6];
// let small = array[0];
// let big =array[0] 
// for (let i = 1; i < array.length; i++) {
//   if (array[i] < small) {
//     small = array[i];
//   }
// }
// // console.log(small)
// for (let i = 1; i < array.length; i++) {
//     if (array[i] > big) {
//       big = array[i];
//     }
//   }
// //   console.log(big)
// let sum=big+small
// console.log(sum)