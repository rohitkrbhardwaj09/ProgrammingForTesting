function AddTwoMatrix(){

    //initializing two arrays
    const first =  [[2, 3], [3, 5], [6, 1]];
    const second = [[7, 8], [8, 4], [5, 6]];

    const m = first.length;
    const n = first[0].length;

    //new Array(m): This creates a new array with length m. In this context, m represents the number of rows in the matrices.
    // .fill(0): This fills each element of the array with the value 0. Since we want to initialize the sum matrix, we fill it with zeros initially.
    // .map(() => new Array(n).fill(0)): This maps each element of the array to a new array initialized with length n (representing the number of columns in the matrices) and filled with 0.
    
    const sum = new Array(m).fill(0).map(() => new Array(n).fill(0));

    console.log("Calculating Sum of Two Matrix: ");
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            sum[i][j] = first[i][j] + second[i][j];
        }
    }

    console.log("Sum of Two Matrix: ");
    for (let i = 0; i < m; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += sum[i][j] + "\t";
        }
        console.log(row);
    }
}

AddTwoMatrix()