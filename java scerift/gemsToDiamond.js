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
