package basic;

public class ConvertSentenceToCamelCase {
    public static void main(String[] args) {
        
        String str = "my name is rohit";

        String updatedString = "";
        
        String[] s1 = str.split(" ");

        for (int i = 0; i < s1.length; i++) {
            String f = s1[i].substring(0, 1).toUpperCase();
            String l = s1[i].substring(1, s1[i].length());
            updatedString = updatedString + " " + (f+l);   
        }

        System.out.println(updatedString.trim());
    }
}
