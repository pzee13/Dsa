function linearSearch(arr, target) {
    let index = 0;

    while (index < arr.length && arr[index] !== target) {
        index++;
    }

    return index < arr.length ? index : -1;

}

const l=linearSearch([1,3,4,2,5,2],3)
console.log(l)