
// --------------problem Number 1-----------------

function mindGame(num) {
    return (num * 3 + 10) / 2 - 5;
}

console.log(mindGame(5));
console.log(mindGame(50));
console.log(mindGame(33));



//---------------------   problem number 2------------------

function evenOdd(str) {
    if (str.length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(evenOdd("Phero"));
console.log(evenOdd("Batch7"));
console.log(evenOdd("chatgpt"));

// ---------------  problem number 3 --------------

function isLGSeven(num) {
    let difference = num - 7;
    if (difference < 7) {
        return difference;
    } else {
        return 2 * num;
    }
}

console.log(isLGSeven(6));
console.log(isLGSeven(-15));



//  -------------- problem number 4----------


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



//-------------------- problem number 5---------------

function gemsToDiamond(g1, g2, g3) {
    let total = g1 * 21 + g2 * 32 + g3 * 43;
    if (total > 1000) {
        total = total - 2000;
    }
    return total;
}

console.log(gemsToDiamond(1, 1, 1));
console.log(gemsToDiamond(20, 200, 50));
console.log(gemsToDiamond(100, 5, 1));