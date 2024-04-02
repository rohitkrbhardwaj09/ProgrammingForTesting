package basic;

/**
 * CountTheAlphabats
 */
public class CountTheAlphabats {
    public static void main(String[] args) {

        String str = "My name is Rohit, and my dob is 9 may 1996";

        int count = getCountOfAlphabats(str);
        System.out.println(count);
    }

    private static int getCountOfAlphabats(String str) {

        String alphabatsOnly = str.replaceAll("[^a-zA-Z0-9]", "");

        return alphabatsOnly.length();
    }

}