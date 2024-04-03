const str = "Javascript is Javascript again Javascript"

const c = 'a';

function countOccuranceOfCharacter(str) {
    
    const count = str.split(c).length-1;
    return count;

}

console.log(countOccuranceOfCharacter(str));