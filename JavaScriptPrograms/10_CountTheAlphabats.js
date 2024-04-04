function CountTheAlphabats(str) {
    let alphabatOnly = str.replace(/[^a-zA-Z0-9]/g, "")

    // console.log(alphabatOnly);
    return alphabatOnly.length;
}

const str = "My name is Rohit, and my dob is 9 may 1996";

console.log(CountTheAlphabats(str));
// CountTheAlphabats(str);