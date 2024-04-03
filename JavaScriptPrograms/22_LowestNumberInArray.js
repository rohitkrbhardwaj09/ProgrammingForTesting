function lowestNumber(arr){
    let lowest = Number(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i])
        if(num < lowest){
            lowest = arr[i]
        }
        
    }
    return lowest;
}

const array = ["10", "12", "14", "16", "18", "5"]
const smallestNum = lowestNumber(array)
console.log(smallestNum);