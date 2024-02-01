function binarySearch(arr,t){
    let l = 0
    let r = arr.length - 1

    while(l<=r)
    {
        let m = Math.floor((l+r)/2)
        if(t==arr[m])
        {
            return m
        }
        if(t<arr[m])                      //Big-O = O(log(n))
        {
            r = m-1
        }
        else{
            l = m+1
        }
    }
    return -1
}

console.log(binarySearch([2,3,6,9,10],9))
console.log(binarySearch([2,3,6,9,10],6))
console.log(binarySearch([1,3],2))
