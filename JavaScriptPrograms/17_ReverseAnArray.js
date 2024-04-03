const arr = [10, 20, 30, 40, 50]


function reverseArray(arr) {
    const newArr = []
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i])
    }

    return newArr;
}

console.log(reverseArray(arr));