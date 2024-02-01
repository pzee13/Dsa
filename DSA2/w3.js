function insert(arr){
    for(let i=0;i<arr.length;i++){
        let nti=arr[i]
        let j = i-1
        while(j>=0 && arr[j]>nti){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]= nti
    }
}

let arr= [7,4,3,2,5,1,6]

insert(arr)

console.log(arr)