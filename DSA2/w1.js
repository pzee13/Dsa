function mergesort(arr){
    if(arr.length<2){
        return arr
    }
    let m = Math.floor(arr.length/2)
    let left = arr.slice(0,m)
    let right = arr.slice(m)
    return merge(mergesort(left),mergesort(right))
}

function merge(left,right){
    sarr= []
    while(left.length && right.length){
        if(left[0]<right[0]){
            sarr.push(left.shift())
        }else{
            sarr.push(right.shift())
        }

        
    }
    return [...sarr,...left,...right]
}

let arr = [2,1,4,3,5,1]



console.log(mergesort(arr))