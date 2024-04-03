function IsPalindrome(str) {
    
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        
        if(str[i] !== str[str.length -1 - i]){
            return false;
        }

        return true;
    }

}

if(IsPalindrome("mom")){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}