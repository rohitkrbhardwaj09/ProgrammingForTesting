package basic;

import java.util.ArrayList;

public class ArrayListOne {
    public static void main(String[] args) {
        ArrayList<String> arrayList = new ArrayList<String>();

        arrayList.add("Mark");
        arrayList.add("David");
        arrayList.add("Jhon");
        arrayList.add("Peter");
        arrayList.add("Sam");

        System.out.println(arrayList.size());

        for (String list : arrayList) {
            System.out.println(list);
        }
    }
}
