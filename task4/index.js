const matrix = [[10, 11, 12],[13, 14, 15],[16, 17, 18]];
for(let i = 0;i < matrix;i++) {
    matrix[i].flat()
};
for(mat of matrix) {
    console.log(mat)
}
const matrixFlat = matrix.flat();
console.log(matrixFlat)