// function mult(arr){
//     if(arr.length===0){
//         return 1
//     }else{
//         return arr[0]*mult(arr.slice(1))
//     }
// }

// let arr=[1,2,3,4]

// console.log(mult(arr))

function mult(arr,i=0){
    if(i===arr.length){
        return 1
    }else{
        return arr[i]*mult(arr,i+1)
    }
}

 let arr=[1,2,3,4]
 console.log(mult(arr))
