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

function selectionSort(arr) {
    let min = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) min = j;
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
}

myArray = [4, 2, 6, 5, 1, 3];
selectionSort(myArray);
console.log(myArray);

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/

function insertionSort(arr) {
    let j = 0;

    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (j = i - 1; temp < arr[j] && j > -1; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

myArray = [4, 2, 6, 5, 1, 3];
insertionSort(myArray);
console.log(myArray);

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/
