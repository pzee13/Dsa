function linearSearch(arr,t){
for(let i=0;i<arr.length;i++)
    {
    if(arr[i]===t)
    {
        return i     //Big-O = O(n)
    }
}
return -1
}

console.log(linearSearch([1,4,7,2,18],7))
console.log(linearSearch([1,4,7,2,18],24))