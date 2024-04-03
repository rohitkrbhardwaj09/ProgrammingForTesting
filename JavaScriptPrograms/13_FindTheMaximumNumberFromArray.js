const arr = [20, 24, 35, 65, 12];

function getMaximum(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaximum(arr));