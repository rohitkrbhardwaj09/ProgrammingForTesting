package basic;

public class BubbleSort {

    public static void main(String[] args) {
        int arr[] = { 64, 34, 25, 12, 22, 11, 90 };

        int size = arr.length;

        int newArr[] = sortArrayUsingBubbleSort(arr, size);

        for (int i : newArr) {
            System.out.println(i);
        }
    }

    private static int[] sortArrayUsingBubbleSort(int[] arr, int size) {
        
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size - i - 1; j++) {
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;

                }
            }
        }

        return arr;
    }

    
}
