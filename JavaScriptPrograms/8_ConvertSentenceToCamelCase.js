const myName = "my name is rohit";

let newName = "";

const nameArr = myName.split(" ");

for (let i = 0; i < nameArr.length; i++) {

    const f = nameArr[i].substring(0, 1).toUpperCase();
    const l = nameArr[i].substring(1, nameArr[i].length)
    
    newName = newName + " " + (f+l);
   
}

newName = newName.trim();
console.log(newName);