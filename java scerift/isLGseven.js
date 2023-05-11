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
