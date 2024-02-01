function recursiveInsertSort(arr, n = arr.length) {
    if (n <= 1) {
        return;
    }

    recursiveInsertSort(arr, n - 1);

    let lastElement = arr[n - 1];
    let j = n - 2;

    while (j >= 0 && arr[j] > lastElement) {
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = lastElement;
}

let arr = [1, 3, 4, 5, 1, 0, -3, 9];
recursiveInsertSort(arr);
console.log("Sorted array 1 (Recursive):", arr);