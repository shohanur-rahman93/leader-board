function getMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let arr = [3, 4, 2, 4, 5];
console.log(`The minimum element in the array is: ${getMin(arr)}`);
