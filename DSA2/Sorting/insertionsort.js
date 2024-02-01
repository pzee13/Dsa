function insert(arr){
    for(let i=0;i<arr.length;i++){
        let nti = arr[i]
        let j=i-1
        while(j>=0 && arr[j]>nti){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]= nti
    }
}

let arr = [1,3,4,5,1,0,-3,9]
insert(arr)

console.log("soretd array 1",arr)

/////////////////////////////////////////////

function insertionSort(arr) {
    arr.forEach((element, index) => {
        let i = index - 1;
        while (i >= 0 && arr[i] > element) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = element;
    });
}

let arr1 = [64, 34, 25, 12, 22, 11, 90];
insertionSort(arr1);
console.log("Sorted array 2:", arr1);


///////////////////////////////////////////////////

function insertionSortreduce(arr) {
    arr.reduce((acc, current, index) => {
        let i = index - 1;
        while (i >= 0 && arr[i] > current) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = current;
        return arr;
    }, []);
}

let arr2 = [5, 2, 9, 1, 5, 6];
insertionSortreduce(arr2);
console.log("Sorted array 3:", arr2);
