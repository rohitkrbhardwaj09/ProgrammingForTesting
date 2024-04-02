package basic;

public class GeneratingRandomNumbersInGivenRange {
    public static void main(String[] args) {
        
        int mixRange = 1;
        int maxRange = 100;

        int randomNum = getRandomNumber(mixRange, maxRange);
        System.out.println("Random number is: "+ randomNum);
        
    }

    private static int getRandomNumber(int min, int max){


        return (int) ((Math.random() * (max-min+1)) + min);
    }
}
