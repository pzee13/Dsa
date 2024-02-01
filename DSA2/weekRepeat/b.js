function bs(arr,t,f,l){
    if(f>l){
        return -1
    }

    let mid = Math.floor((l+f)/2)

    
    if(arr[mid]==t){
        return mid
    }
   else if(arr[mid]>t){
        return bs(arr,t,f,mid-1)
    }else{
        return bs(arr,t,mid+1,l)
    }
}

let arr =[1,2,4,5,6,7,8]

console.log(bs(arr,6,1,8))