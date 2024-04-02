package basic;

public class BinarySearch{
    public static void main(String[] args) {
        
        int arr[] = {10, 20, 30, 44, 50};
        int target = 44;

        int result = getBinarySearch(arr, target);

        if(result == -1){
            System.out.println(target+" value is not found in the Array");
        }else{
            System.out.println(target+" value is found in array at index: "+result);
        }
    }

    private static int getBinarySearch(int[] arr, int target) {

        int first, last, mid;
        first = 0;
        last = arr.length-1;
        

        while(first <= last){
            mid = (first+last)/2;

            if(arr[mid] == target){
                return mid;
            }

            if (arr[mid] < target) {
                first = mid + 1;
            } else {
                last = mid - 1;
            }
        }

        return -1;
    }
}