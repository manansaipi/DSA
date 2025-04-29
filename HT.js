class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    printTable() {
        for (let i = 0; i < this.dataMap.length; i++) {
            console.log(i, ": ", this.dataMap[i]);
        }
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.dataMap[index]) this.dataMap[index] = [];

        this.dataMap[index].push([key, value]);
        return this;
    }

    get(key) {
        let index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let allKeys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0]);
                }
            }
        }
        return allKeys;
    }
}

let myHashTable = new HashTable();

myHashTable.set("paint", 20);
myHashTable.set("bolts", 40);
myHashTable.set("nails", 100);
myHashTable.set("tile", 50);
myHashTable.set("lumber", 80);

console.log(myHashTable.keys());

/*
    EXPECTED OUTPUT:
    ----------------
    [ 'paint', 'bolts', 'nails', 'tile', 'lumber' ]

*/

function itemInCommon(arr1, arr2) {
    // USING MAP
    let map = new Map();
    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i], true);
    }
    for (let j = 0; j < arr2.length; j++) {
        if (map.get(arr2[j])) return true;
    }

    return false;
}
console.log(itemInCommon([1, 3, 5], [2, 4, 2]));
// should return false

function itemInCommon(arr1, arr2) {
    // USING OBJECT
    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true;
    }
    for (let j = 0; j < arr2.length; j++) {
        if (obj[arr2[j]]) return true;
    }
    return false;
}
console.log(itemInCommon([1, 3, 5], [2, 4, 2]));
// should return false

function findDuplicates(arr1) {
    let resultArr = [];

    let obj = {};

    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        if (obj[element]) {
            resultArr.push(element);
        }
        obj[element] = true;
    }
    return resultArr;
}
console.log(findDuplicates([1, 2, 3, 4, 4, 5, 6, 6]));
// should return [ 4, 6 ]

function findDuplicates(nums) {
    // solution from udemy
    const numCounts = new Map();
    for (let num of nums) {
        numCounts.set(num, (numCounts.get(num) || 0) + 1);
    }
    const duplicates = [];
    for (let [key, value] of numCounts.entries()) {
        if (value > 1) {
            duplicates.push(key);
        }
    }
    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 4, 5, 6, 6]));
// should return [ 4, 6 ]

function firstNonRepeatingChar(str) {
    let map = new Map();

    for (let index = 0; index < str.length; index++) {
        const element = str[index];

        map.set(element, (map.get(element) || 0) + 1);
    }
    for (const char of str) {
        if (map.get(char) == 1) return char;
    }

    return null;
}

console.log(firstNonRepeatingChar("aabbcc"));
// should return null
console.log(firstNonRepeatingChar("aabbcde"));
// should return c

function groupAnagrams(arr) {
    let obj = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const sorting = arr[i].split("").sort().join("");
        if (obj[sorting]) {
            obj[sorting].push(arr[i]);
        } else {
            obj[sorting] = [arr[i]];
        }
    }
    for (const key in obj) {
        result.push(obj[key]);
    }
    return result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//should return [ ['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat'] ]
console.log(groupAnagrams(["abc", "cab", "bca", "xyz", "zyx"]));
//should return [ ['abc', 'cab', 'bca'], ['xyz', 'zyx'] ]

function twoSum(arrNums, target) {
    // use object

    let obj = {};

    for (let i = 0; i < arrNums.length; i++) {
        const num = arrNums[i];
        const complement = target - num;

        if (obj.hasOwnProperty(complement)) {
            return [obj[complement], i];
        }

        obj[num] = i;
    }
    return [];
}

function twoSum(arrNums, target) {
    // use map
    let map = new Map();

    for (let i = 0; i < arrNums.length; i++) {
        const num = arrNums[i];
        const complement = target - num;

        if (map.has(complement)) return [map.get(complement), i];

        map.set(num, i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
// should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
console.log(twoSum([3, 2, 4], 6));
// should return [1, 2] because nums[1] + nums[2] = 2 + 4 = 6

function subarraySum(arr, target) {
    let map = new Map();
    let currentSum = 0;

    map.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (map.has(currentSum - target)) {
            return [map.get(currentSum - target) + 1, i];
        }

        if (!map.has(currentSum)) {
            map.set(currentSum, i);
        }
    }
    return [];
}

console.log(subarraySum([1, 4, 20, 3, 10, 5], 33));
//should return [2, 4] because the subarray from index 2 to index 4 sums to 33.
console.log(subarraySum([1, 2, 3], 3));
//should return [0, 1] because the subarray from index 0 to index 1 sums to 3.

function removeDuplicates(arr) {
    let mySet = new Set();

    for (let index = 0; index < arr.length; index++) {
        const num = arr[index];
        mySet.add(num);
    }
    return Array.from(mySet);
}

function removeDuplicates(myList) {
    // Create a new Set from "myList"
    // Sets only allow unique values, so duplicates are removed
    const uniqueSet = new Set(myList);

    // Convert the Set back into an array
    // The resulting array will only have unique elements
    // because we converted it from a Set that has no duplicates
    return Array.from(uniqueSet);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4]));
// expected : [1, 2, 3, 4]

function hasUniqueChars(str) {
    let mySet = new Set();

    for (let index = 0; index < str.length; index++) {
        const char = str[index];

        if (mySet.has(char)) {
            return false;
        }
        mySet.add(char);
    }
    return true;
}
console.log(hasUniqueChars("hello"));
// expected : false. In this example, the letter 'l' appears two times in the word "hello". So, the function should return false
console.log(hasUniqueChars("world"));
// expected : true. In this example, all the letters are unique, so the function should return true.

function findPairs(arr1, arr2, target) {
    let mySet = new Set();
    let result = [];

    let arr1Set = new Set(arr1);

    for (let i = 0; i < arr2.length; i++) {
        const complement = target - arr2[i];
        if (arr1Set.has(complement)) {
            result.push([complement, arr2[i]]);
        }
    }
    return result;
}
console.log(findPairs([1, 2, 3], [4, 5, 6], 7));
//expected : [[1, 6], [2, 5], [3, 4]].
// In this example, 1 from arr1 and 6 from arr2 add up to 7. Similarly, 2 and 5, and 3 and 4 also add up to 7. So, the function returns these pairs.

function longestConsecutiveSequence(arr) {
    let mySet = new Set(arr);
    let longestStreak = 0;

    for (const num of mySet) {
        if (!mySet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 0;

            while (mySet.has(currentNum)) {
                currentNum++;
                currentStreak++;
            }
            // get the longest streak
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
}

console.log(longestConsecutiveSequence([1, 2, 3, 4, 5]));
// excpected : 5. In this example, the numbers 1, 2, 3, 4, and 5 form a consecutive sequence, and the length is 5.
console.log(longestConsecutiveSequence([1, 2, 3, 4, 10, 11, 12]));
// expected : 4. In this example, when arranged in order, the numbers 1, 2, 3, and 4 form a consecutive sequence. So, the length is 4.
