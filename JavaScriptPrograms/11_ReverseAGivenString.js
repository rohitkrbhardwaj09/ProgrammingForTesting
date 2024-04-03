const str = "Elephant";
const length = str.length;


function reverseString(str, length){
    let reversed = "";
    for (let i = length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(`Original String: ${str}`);
console.log(`Reversed String: ${reverseString(str, length)}`);

