package basic;

public class CountTotalNumberOfOccuranceOfAGivenNumber {

    public static void main(String[] args) {

        String str = "Javascript is Javascript again Javascript";

        char c = 'a';

        int count = str.length() - str.replace("a", "").length();

        System.out.println(count);
    }

}