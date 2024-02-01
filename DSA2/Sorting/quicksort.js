function quick(arr) {
    if(arr.length<2){
        return arr
    }
    let piv = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]<piv){
        left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left), piv, ...quick(right)]
}

let arr = [9,5,2,7,6,8,3,4]

let sortarray = quick(arr)
console.log(sortarray)
