 function shiftDown(index,arr,length){
    let s = index
    let lc = 2*index+1
    let rc = 2*index+2

    if(index<length&&arr[lc]>arr[s]){
        s= lc
    }
    if(index<length&&arr[rc]>arr[s]){
        s= rc
    }
    if(s!==index){
        swap(s,index,arr)
        shiftDown(s,arr,length)
    }
 }

 function swap(i,j,arr){
    [arr[i],arr[j]]=[arr[j],arr[i]]
 }

 function heapSort(arr){
    let s =[...arr]
    let length=s.length
    for(let i=Math.floor(s.length/2)-1;i>=0;i--){
        shiftDown(i,s,length)
    }
    return s
 }
let arr = [3,2,1,6,9,7]

 console.log(heapSort(arr))