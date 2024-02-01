function recBinary(arr,t){
    return search(arr,t,0,arr.length-1)
}

function search(arr,t,l,r)
    {
        if(l>r)
        {
            return -1
        }

        let m = Math.floor((l+r)/2)
        if(t==arr[m])
        {
            return m                       //Big-O = O(log(n))
        }

        if(t<arr[m])
        {
            return search(arr,t,l,m-1)
        }
        else{
            return search(arr,t,m+1,r)
        }
    }

console.log(recBinary([1,2,4,5,9],5))
