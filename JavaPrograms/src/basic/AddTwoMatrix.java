package basic;

public class AddTwoMatrix {
    
    public static void main(String[] args) {
        
        int m, n;

        int[][] first = {{2, 3}, {3, 5}, {6, 1}};
        int[][] second = {{7, 8}, {8, 4}, {5, 6}};

        m = first.length;
        n = first[0].length;

        System.out.println(m);
        System.out.println(n);
        
        int sum[][] = new int[m][n];

        System.out.println("Calculating sum of Two Matrixes: ");

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                sum[i][j] = first[i][j] + second[i][j];
            }
        }

        System.err.println("Printing sum of Two Matrixes: ");
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(sum[i][j]+"\t");
            }
            System.out.println();
        }
    }

}
