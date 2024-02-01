function bubble(arr,i=0){
    if(i<arr.length-1){
        if(arr[i]>arr[i+1]){
            temp = arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            return bubble(arr,0)
        }
            else{
                return bubble(arr,i+1)
            }
        
    }
}

const arr =[1,3,2,5,7,6]
bubble(arr)
console.log(arr)



