function countNumberOfDigits() {
    let count = 0;
    let digit = 2345;

    while (digit !== 0) {
        digit = Math.floor(digit / 10)
        count++
    }

    return count;
}

console.log(countNumberOfDigits());