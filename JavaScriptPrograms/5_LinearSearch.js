const arr = [14, 3, 23, 54, 5];
const target = 54;
const n = arr.length

function LinearSearch(arr, target) {
    for (let i = 0; i < n; i++) {
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

const result = LinearSearch(arr, target);
if(result === -1){
    console.log(`${target} is not found in array`);
}else{
    console.log(`${target} is found in array at index: ${result}`);
}