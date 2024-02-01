function quick(arr){
    if(arr.length<2){
        return arr
    }
    let piv = arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<piv){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),piv,...quick(right)]
}

let arr = [7,4,3,2,5,1,6]

let res = quick(arr)

console.log(res)