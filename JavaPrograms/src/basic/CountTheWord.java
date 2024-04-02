package basic;

import java.util.Scanner;

public class CountTheWord {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a String: ");
        String str = sc.nextLine();

        
        System.out.println("Total numbers of words in given String is: "+countWords(str));



        sc.close();
    }

    private static int countWords(String str) {
        str = str.trim();

        if(str.isEmpty()){
            return 0;
        }

        String[] words = str.split("\\s+");
    return words.length;
    }
}
