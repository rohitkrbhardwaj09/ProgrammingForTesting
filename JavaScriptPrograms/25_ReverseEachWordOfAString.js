const str = "My name is Rohit Bhardwaj"

function ReversedEachWord(str) {
    
    
    const word = str.split(" ");
    let reversedStr = '';

    for (let i = 0; i < word.length; i++) {
        const reversedWord = ReverseString(word[i])
        reversedStr += reversedWord + ' ';
    }

    return reversedStr;
}

function ReverseString(str){
    let reverse = '';
    for (let i = str.length-1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse;
}

console.log(ReversedEachWord(str));