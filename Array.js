var removeDuplicates = function(nums) {
    let i = 1;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;    
};

// ------------------------------------
//  Test array with no duplicates
// ------------------------------------
let noDups = [1, 2, 3, 4];
console.log("Test array with no duplicates:");
console.log("Before:", noDups);
let lenNoDups = removeDuplicates(noDups);
console.log("After:", noDups.slice(0, lenNoDups));
console.log("Length:", lenNoDups);
console.log("---------------");

// ------------------------------------
//  Test array with duplicates
// ------------------------------------
let withDups = [1, 1, 2, 2, 3];
console.log("Test array with duplicates:");
console.log("Before:", withDups);
let lenWithDups = removeDuplicates(withDups);
console.log("After:", withDups.slice(0, lenWithDups));
console.log("Length:", lenWithDups);
console.log("---------------");

// ------------------------------------
//  Test empty array
// ------------------------------------
let emptyArr = [];
console.log("Test empty array:");
console.log("Before:", emptyArr);
let lEmpty = removeDuplicates(emptyArr);
console.log("After:", emptyArr.slice(0, lEmpty));
console.log("Length:", lEmpty);
console.log("---------------");

// ------------------------------------
//  Test array with all same numbers
// ------------------------------------
let allSame = [3, 3, 3];
console.log("Test array with all same numbers:");
console.log("Before:", allSame);
let lenAllSame = removeDuplicates(allSame);
console.log("After:", allSame.slice(0, lenAllSame));
console.log("Length:", lenAllSame);
console.log("---------------");

// ------------------------------------
//  Test array with negative numbers
// ------------------------------------
let negNumbers = [-1, -1, 0, 2, 2];
console.log("Test array with negative numbers:");
console.log("Before:", negNumbers);
let lenNeg = removeDuplicates(negNumbers);
console.log("After:", negNumbers.slice(0, lenNeg));
console.log("Length:", lenNeg);
console.log("---------------");

// ------------------------------------
//  Test array with one element
// ------------------------------------
let singleElem = [1];
console.log("Test array with one element:");
console.log("Before:", singleElem);
let lenSingle = removeDuplicates(singleElem);
console.log("After:", singleElem.slice(0, lenSingle));
console.log("Length:", lenSingle);
console.log("---------------");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

function findLongestString(arr) {
    if (arr.length == 0) return "";
    let longestLength = 0;
    let indexLongestLength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (longestLength < arr[i].length) {
            longestLength = arr[i].length;
            indexLongestLength = i;
        }
    }
    return arr[indexLongestLength];
}

// ------------------------------------
//  Test array with short strings
// ------------------------------------
let shortStrs = ["hi", "yo", "hey"];
console.log("Test array with short strings:");
console.log("Array:", shortStrs); // Should print: ["hi", "yo", "hey"]
let resultShort = findLongestString(shortStrs);
console.log("Longest String:", resultShort); // Should print: "hey"
console.log("---------------");

// ------------------------------------
//  Test array with long strings
// ------------------------------------
let longStrs = ["hello", "goodbye", "supercalifragilisticexpialidocious"];
console.log("Test array with long strings:");
console.log("Array:", longStrs); // Should print: ["hello", "goodbye", "supercalifragilisticexpialidocious"]
let resultLong = findLongestString(longStrs);
console.log("Longest String:", resultLong); // Should print: "supercalifragilisticexpialidocious"
console.log("---------------");

// ------------------------------------
//  Test array with varying length strings
// ------------------------------------
let variedStrs = ["short", "longer", "longest"];
console.log("Test array with varying length strings:");
console.log("Array:", variedStrs); // Should print: ["short", "longer", "longest"]
let resultVaried = findLongestString(variedStrs);
console.log("Longest String:", resultVaried); // Should print: "longest"
console.log("---------------");

// ------------------------------------
//  Test array with all same length strings
// ------------------------------------
let sameStrs = ["same", "size", "test"];
console.log("Test array with all same length strings:");
console.log("Array:", sameStrs); // Should print: ["same", "size", "test"]
let rSame = findLongestString(sameStrs);
console.log("Longest String:", rSame); // Should print: "same" (or "size" or "test")
console.log("---------------");

// ------------------------------------
//  Test array with one string
// ------------------------------------
let oneStr = ["single"];
console.log("Test array with one string:");
console.log("Array:", oneStr); // Should print: ["single"]
let rOne = findLongestString(oneStr);
console.log("Longest String:", rOne); // Should print: "single"
console.log("---------------");

// ------------------------------------
//  Test array with empty strings
// ------------------------------------
let emptyStrs = ["", "", ""];
console.log("Test array with empty strings:");
console.log("Array:", emptyStrs); // Should print: ["", "", ""]
let resultEmpty = findLongestString(emptyStrs);
console.log("Longest String:", resultEmpty); // Should print: ""
console.log("---------------");

// ------------------------------------
//  Test array with numbers as strings
// ------------------------------------
let numStrs = ["123", "1234", "12"];
console.log("Test array with numbers as strings:");
console.log("Array:", numStrs); // Should print: ["123", "1234", "12"]
let resultNum = findLongestString(numStrs);
console.log("Longest String:", resultNum); // Should print: "1234"
console.log("---------------");

// ----------------------------------------------------------------------------------------------------

function findMaxMin(array) {
    let max = array[0];
    let min = array[0];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }

    return [max, min];
}

// ------------------------------------
//  Test array with positive numbers
// ------------------------------------
let arrPos = [1, 2, 3, 4, 5];
console.log("Test array with positive numbers:");
console.log("Array:", arrPos); // Should print: [1, 2, 3, 4, 5]
let resultPos = findMaxMin(arrPos);
console.log("Max and Min:", resultPos); // Should print: [5, 1]
console.log("---------------");

// ------------------------------------
//  Test array with negative numbers
// ------------------------------------
let arrNeg = [-1, -2, -3, -4];
console.log("Test array with negative numbers:");
console.log("Array:", arrNeg); // Should print: [-1, -2, -3, -4]
let resultNeg = findMaxMin(arrNeg);
console.log("Max and Min:", resultNeg); // Should print: [-1, -4]
console.log("---------------");

// ------------------------------------
//  Test array with both positive and negative numbers
// ------------------------------------
let arrMixed = [-1, 0, 1];
console.log("Test array with both positive and negative numbers:");
console.log("Array:", arrMixed); // Should print: [-1, 0, 1]
let resultMixed = findMaxMin(arrMixed);
console.log("Max and Min:", resultMixed); // Should print: [1, -1]
console.log("---------------");

// ------------------------------------
//  Test array with all same numbers
// ------------------------------------
let arrSame = [2, 2, 2, 2];
console.log("Test array with all same numbers:");
console.log("Array:", arrSame); // Should print: [2, 2, 2, 2]
let resultSame = findMaxMin(arrSame);
console.log("Max and Min:", resultSame); // Should print: [2, 2]
console.log("---------------");

// ------------------------------------
//  Test array with one number
// ------------------------------------
let arrOne = [7];
console.log("Test array with one number:");
console.log("Array:", arrOne); // Should print: [7]
let resultOne = findMaxMin(arrOne);
console.log("Max and Min:", resultOne); // Should print: [7, 7]
console.log("---------------");

// ------------------------------------
//  Test array with decimals
// ------------------------------------
let arrDec = [1.5, 2.5, 0.5];
console.log("Test array with decimals:");
console.log("Array:", arrDec); // Should print: [1.5, 2.5, 0.5]
let resultDec = findMaxMin(arrDec);
console.log("Max and Min:", resultDec); // Should print: [2.5, 0.5]
console.log("---------------");

// ------------------------------------
//  Test array with zeros
// ------------------------------------
let arrZero = [0, 0, 0];
console.log("Test array with zeros:");
console.log("Array:", arrZero); // Should print: [0, 0, 0]
let resultZero = findMaxMin(arrZero);
console.log("Max and Min:", resultZero); // Should print: [0, 0]
console.log("---------------");

// -----------------------------------------------------------------------------------------------------

var removeElement = function (nums, val) {
    let k = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

// ------------------------------------
//  Test empty array
// ------------------------------------
let arrEmpty = [];
console.log("Test empty array:");
console.log("Before:", arrEmpty); // Should print: []
let lenEmpty = removeElement(arrEmpty, 3);
console.log("After:", arrEmpty.slice(0, lenEmpty)); // Should print: []
console.log("Length:", lenEmpty); // Should print: 0
console.log("---------------");

// ------------------------------------
//  Test array without the element to remove
// ------------------------------------
let arrNoElem = [1, 2, 3, 4];
console.log("Test array without the element to remove:");
console.log("Before:", arrNoElem); // Should print: [1, 2, 3, 4]
let lenNoElem = removeElement(arrNoElem, 5);
console.log("After:", arrNoElem.slice(0, lenNoElem)); // Should print: [1, 2, 3, 4]
console.log("Length:", lenNoElem); // Should print: 4
console.log("---------------");

// ------------------------------------
//  Test array with one type of element to remove
// ------------------------------------
let arrOneType = [3, 3, 3, 3];
console.log("Test array with one type of element to remove:");
console.log("Before:", arrOneType); // Should print: [3, 3, 3, 3]
let lenOneType = removeElement(arrOneType, 3);
console.log("After:", arrOneType.slice(0, lenOneType)); // Should print: []
console.log("Length:", lenOneType); // Should print: 0
console.log("---------------");

// ------------------------------------
//  Test array with the element to remove scattered
// ------------------------------------
let arrScattered = [1, 2, 3, 4, 2, 2];
console.log("Test array with the element to remove scattered:");
console.log("Before:", arrScattered); // Should print: [1, 2, 3, 4, 2, 2]
let lenScattered = removeElement(arrScattered, 2);
console.log("After:", arrScattered.slice(0, lenScattered)); // Should print: [1, 3, 4]
console.log("Length:", lenScattered); // Should print: 3
console.log("---------------");

// ------------------------------------
//  Test array with all unique elements
// ------------------------------------
let arrUnique = [1, 2, 3, 4];
console.log("Test array with all unique elements:");
console.log("Before:", arrUnique); // Should print: [1, 2, 3, 4]
let lenUnique = removeElement(arrUnique, 3);
console.log("After:", arrUnique.slice(0, lenUnique)); // Should print: [1, 2, 4]
console.log("Length:", lenUnique); // Should print: 3
console.log("---------------");

// ------------------------------------
//  Test array with negative numbers
// ------------------------------------
let arrNegative = [-1, -2, -3, -4];
console.log("Test array with negative numbers:");
console.log("Before:", arrNegative); // Should print: [-1, -2, -3, -4]
let lenNegative = removeElement(arrNegative, -2);
console.log("After:", arrNegative.slice(0, lenNegative)); // Should print: [-1, -3, -4]
console.log("Length:", lenNegative); // Should print: 3
console.log("---------------");

// ------------------------------------
//  Test array with zeros
// ------------------------------------
let arrZeros = [0, 0, 0, 0];
console.log("Test array with zeros:");
console.log("Before:", arrZeros); // Should print: [0, 0, 0, 0]
let lenZeros = removeElement(arrZeros, 0);
console.log("After:", arrZeros.slice(0, lenZeros)); // Should print: []
console.log("Length:", lenZeros); // Should print: 0
console.log("---------------");
