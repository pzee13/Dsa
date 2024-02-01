function times(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++; 
        }
    }
    return count;
}

console.log(times([1, 4, 7, 2, 18, 7], 7)); 
console.log(times([1, 4, 7, 2, 18], 24));