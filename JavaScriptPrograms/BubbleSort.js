const arr = [64, 34, 25, 12, 22, 11, 90];
const size = arr.length;

function bubbleSort(arr, size) {
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size-i-1; j++) {
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        
    }
    return arr;
}

const newArr = bubbleSort(arr, size);
newArr.forEach(element => {
    console.log(element);
});