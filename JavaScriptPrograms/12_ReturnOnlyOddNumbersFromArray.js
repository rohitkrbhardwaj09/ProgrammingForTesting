const arr = [10, 11, 12, 13, 14, 15, 16, 17]
let oddArr = [];
// console.log(arr.length);

function FindOddsOnly(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0){
            oddArr.push(arr[i]);
        }
    }
    return oddArr;
}

console.log(FindOddsOnly(arr));