package basic;

public class LinearSearch {

    public static void main(String[] args) {
        int arr[] = { 4, 56, 32, 34, 5 };
        int target = 34;
        int result = getLinearSearch(arr, target);

        if (result == -1) {
            System.out.println(target+" is not found in array");
        } else {
            System.out.println(target+" is found in array at index: "+result+".");
        }
    }

    

    private static int getLinearSearch(int[] arr2, int target2) {

        for (int i = 0; i < arr2.length; i++) {
            if (arr2[i] == target2) {
                return i;
            }
        }

        return -1;
    }
}
