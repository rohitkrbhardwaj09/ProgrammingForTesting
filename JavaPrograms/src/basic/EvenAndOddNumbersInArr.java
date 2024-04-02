package basic;

/**
 * EvenAndOddNumbersInArr
 */
public class EvenAndOddNumbersInArr {

    public static void main(String[] args) {

        int a[] = { 10, 20, 15, 3, 6, 7, 8, 2, 5, 7 };

        int n = a.length;

        System.out.println("Even Numbers:");
        for (int i = 0; i < n; i++) {
            if(a[i] % 2 == 0){
                System.out.print(a[i]+",\t");
            }
        }
        System.out.println("");
        System.out.println("Odd Numbers:");
        for (int i = 0; i < n; i++) {
            if(a[i] % 2 != 0){
                System.out.print(a[i]+",\t");
            }
        }

    }

}