function findingBadData(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    console.log(count);
    return count;
}

const arr1 = [1, 2, 5];
const arr2 = [2, -5, -7, -13];
const arr3 = [-4, -9, -5, -33, -55];

console.log("Input:", arr1);
console.log("Output:", findingBadData(arr1));

console.log("Input:", arr2);
console.log("Output:", findingBadData(arr2));

console.log("Input:", arr3);
console.log("Output:", findingBadData(arr3));
