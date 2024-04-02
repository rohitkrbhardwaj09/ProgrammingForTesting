const a = [10, 20, 15, 3, 6, 7, 8, 2, 5, 7];
const size = a.length;

function SeperateEvenOrOddFromArray(a, size) {
    
    console.log("Even numbers: ");
    for (let i = 0; i < size; i++) {
        if(a[i] % 2 === 0){
            console.log(a[i]);
        }
    }
    console.log("Odd numbers: ");
    for (let i = 0; i < size; i++) {
        if(a[i] % 2 !== 0){
            console.log(a[i]);
        }
    }
}

SeperateEvenOrOddFromArray(a, size);