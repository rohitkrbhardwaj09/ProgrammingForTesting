const str = "My name is Rohit Bhardwaj and My doy is 1996";

function CountTheWords(str) {
    
    //removes unwanted spaces
    str = str.trim();

    if(str == ""){
        return 0;
    }

    const words = str.split(" ");
    return words.length;
}

console.log(CountTheWords(str));