function findGreatest(a, b, c) {
    if(a > b && a > c){
        return a
    }else if(b > a && b > c){
        return b
    }else{
        return c
    }
}

const greatest = findGreatest(10, 25, 15);
console.log("Greatest number is: "+ greatest);