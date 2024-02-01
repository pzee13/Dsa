function mult(arr,index){
    if(index===arr.length){
        return 1
    }
    else{
        return arr[index]*mult(arr,index+1)
    }
}

let arr = [1,4,3,2,5]

let res = mult(arr,0)

console.log(res)