function mergesort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergesort(left),mergesort(right))
}

function merge(left,right){
    sort = []
    while(left.length && right.length)
    if(left[0]<right[0])
    {
        sort.push(left.shift())
    }else{
        sort.push(right.shift())
    }
    return [...sort,...left,...right]
}


let arr = [3,1,4,2,7,5,2]

let res = mergesort(arr)

console.log(res)

