function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            const currentVal = arr[j];
            const compareVal = arr[j + 1];
            if (currentVal > compareVal) {
                const temp = currentVal;
                arr[j] = compareVal;
                arr[j + 1] = currentVal;
            }
        }
    }
    return arr;
}

let myArray = [4, 2, 6, 5, 1, 3];
bubbleSort(myArray);
console.log(myArray);

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/

function selectionSort(arr) {}

myArray = [4, 2, 6, 5, 1, 3];
selectionSort(myArray);
console.log(myArray);

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/
