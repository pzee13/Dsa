function sumArray(arr, index = 0) {
    if (index === arr.length - 1) {
        return arr[index];
    } else {
        return arr[index] + sumArray(arr, index + 1);
    }
}

const numbers = [1, 2, 3, 4, 5,6];
const sum = sumArray(numbers);
console.log(`Sum of array elements: ${sum}`);