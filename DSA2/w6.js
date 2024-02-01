

// function mult(arr){
    
//         return arr[arr.length-1] *mult(arr.pop())
//     }
   

// function st(str){
// let s = str.split('')
// let c=0
// for(let i=0;i<str.length;i++){
//     if(s[i]=='b'){
//         if(s[i+1]=='r'){
//             if(s[i+2]=='o'){
//                 c++
//             }
//         }
//     }
// }

// return c
// }

// let str = 'abbrodefbropqrbro'

// console.log(st(str))


const st = (str) => str.split('bro').length - 1;

let str = 'abbrodefbropqrbro';

console.log(st(str));
