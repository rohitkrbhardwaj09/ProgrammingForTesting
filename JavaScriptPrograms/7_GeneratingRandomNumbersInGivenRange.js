function getGenerateRandomNumber(minRange, maxRange) {
    
    const min = Math.floor(minRange)
    const max = Math.floor(maxRange)

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const minRange = 1;
const maxRange = 50;

const generateRandomNumber = getGenerateRandomNumber(minRange, maxRange);
console.log("Generated number is: "+ generateRandomNumber);