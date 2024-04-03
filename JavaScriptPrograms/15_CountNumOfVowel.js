function CountVowels(str) {
    let vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str.charAt(i))){
            console.log(str[i]);
        }
    }
}

CountVowels("Rohit Bhardwaj");