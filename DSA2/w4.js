function select(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
            if(minIndex!==i){
                let temp = arr[i]
                arr[i]=arr[minIndex]
                arr[minIndex]= temp
            }
        }

    return arr
}

let arr = [7,4,3,2,5,1,6]

select(arr)

console.log(arr)