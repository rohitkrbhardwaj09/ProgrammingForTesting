const arr = [10, 20, 30, 44, 50]
const target = 44;
function binarySearch(arr, target) {
    
    let first, last, mid;
    first = 0;
    last = arr.length-1;

    while (first <= last) {
        mid = Math.floor((first+last) / 2);

        if(arr[mid] === target){
            return mid;
        }

        if (arr[mid] < target) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
    }
    return -1;
}

const result = binarySearch(arr, target);
console.log(result);
if(result == -1){
    console.log(`${target} value is not present in the array`);
}else{
    console.log(`${target} value is present in array at index: ${result}`);
}