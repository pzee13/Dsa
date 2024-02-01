function binarySearchCount(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let count = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            count++; 

            let leftPointer = mid - 1;
            while (leftPointer >= 0 && arr[leftPointer] === target) {
                count++;
                leftPointer--;
            }

   
            let rightPointer = mid + 1;
            while (rightPointer < arr.length && arr[rightPointer] === target) {
                count++;
                rightPointer++;
            }

            return count;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1; 
        }
    }

    return count;
}

const sortedArray = [1, 2, 4, 7, 7, 7, 18, 24, 30];
console.log(binarySearchCount(sortedArray, 7)); 
console.log(binarySearchCount(sortedArray, 24));
console.log(binarySearchCount(sortedArray, 10));
