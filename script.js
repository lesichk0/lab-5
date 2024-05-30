// 1.1. computeAreaOfARectangle
function computeAreaOfARectangle(length, width) {
    return length * width;
}
console.log(computeAreaOfARectangle(5, 3)); // 15

// 1.2. computeAreaOfACircle
function computeAreaOfACircle(radius) {
    return Math.PI * radius * radius;
}
console.log(computeAreaOfACircle(4)); // 50.26548245743669

// 1.3. computePower
function computePower(base, exponent) {
    return Math.pow(base, exponent);
}
console.log(computePower(2, 3)); // 8

// 1.4. computeSquareRoot
function computeSquareRoot(number) {
    return Math.sqrt(number);
}
console.log(computeSquareRoot(16)); // 4

// 1.5. getLengthOfThreeWords
function getLengthOfThreeWords(word1, word2, word3) {
    return word1.length + word2.length + word3.length;
}
console.log(getLengthOfThreeWords('one', 'two', 'three')); // 11

// 1.6. joinArrays
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(joinArrays([1, 2], [3, 4])); // [1, 2, 3, 4]

// 1.7. getProductOfAllElementsAtProperty
function getProductOfAllElementsAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key].length === 0) return 0;
    return obj[key].reduce((product, num) => product * num, 1);
}
const obj1 = { key: [1, 2, 3, 4] };
console.log(getProductOfAllElementsAtProperty(obj1, 'key')); // 24

// 1.8. sumDigits
function sumDigits(num) {
    const str = num.toString();
    let sum = 0;
    for (let char of str) {
        if (char === '-') continue;
        sum += parseInt(char);
    }
    return num < 0 ? -sum : sum;
}
console.log(sumDigits(123)); // 6
console.log(sumDigits(-123)); // -6

// 1.9. findShortestWordAmongMixedElements
function findShortestWordAmongMixedElements(arr) {
    const words = arr.filter(item => typeof item === 'string');
    if (words.length === 0) return '';
    return words.reduce((shortest, word) => word.length < shortest.length ? word : shortest, words[0]);
}
console.log(findShortestWordAmongMixedElements([4, 'two', 2, 'three'])); // 'two'

// 1.10. findSmallestNumberAmongMixedElements
function findSmallestNumberAmongMixedElements(arr) {
    const numbers = arr.filter(item => typeof item === 'number');
    if (numbers.length === 0) return '';
    return Math.min(...numbers);
}
console.log(findSmallestNumberAmongMixedElements([4, 'two', 2, 'three'])); // 2

// 1.11. modulo
function modulo(a, b) {
    if (b === 0) return NaN;
    let remainder = Math.abs(a);
    const divisor = Math.abs(b);
    while (remainder >= divisor) {
        remainder -= divisor;
    }
    return a < 0 ? -remainder : remainder;
}
console.log(modulo(7, 3)); // 1
console.log(modulo(10, 2)); // 0

// 1.12. Reverse every p characters in a string
function reverseChunks(str, p) {
    let result = '';
    for (let i = 0; i < str.length; i += p) {
        let chunk = str.slice(i, i + p);
        result += chunk.split('').reverse().join('');
    }
    return result;
}
console.log(reverseChunks("abcdefg", 3)); // "cbafedg"

// 1.13. Find the unique even or odd number
function findUniqueNumber(arr) {
    const evens = arr.filter(num => num % 2 === 0);
    const odds = arr.filter(num => num % 2 !== 0);
    return evens.length === 1 ? evens[0] : odds[0];
}
console.log(findUniqueNumber([2, 4, 6, 8, 10, 3])); // 3
console.log(findUniqueNumber([1, 3, 5, 7, 2])); // 2

// 1.14. Find pair with given sum
function findPairWithSum(arr, sum) {
    const complements = new Set();
    for (let num of arr) {
        if (complements.has(num)) return [num, sum - num];
        complements.add(sum - num);
    }
    return null;
}
console.log(findPairWithSum([1, 2, 3, 4, 5], 7)); // [3, 4]

// 1.15. Check if strings are mirror images
function areMirrorImages(str1, str2) {
    return str1 === str2.split('').reverse().join('');
}
console.log(areMirrorImages("abc", "cba")); // true

// 1.16. Binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4)); // 3

// 1.17. Check if a string is an isogram
function isIsogram(str) {
    const lowerStr = str.toLowerCase();
    const seen = new Set();
    for (let char of lowerStr) {
        if (seen.has(char)) {
            return false;
        }
        seen.add(char);
    }
    return true;
}
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false

// 1.18. Check if words in a sentence are palindromes
function areWordsPalindromes(sentence) {
    const words = sentence.split(' ');
    const results = words.map(word => {
        const cleanedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
        return cleanedWord === cleanedWord.split('').reverse().join('');
    });
    return results;
}
console.log(areWordsPalindromes("Madam, in Eden, I'm Adam")); // [true, false, true, true]
