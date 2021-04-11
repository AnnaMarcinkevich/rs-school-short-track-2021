function getMatrixElementsSum(mat) {
  let rez = 0;
  if (mat.length > 0) {
    rez = mat[0].reduce((sum, item) => sum + item, 0);
    for (let i = 1; i < mat.length; i++) {
      rez += mat[i].reduce((sum, item, index) => (mat[i - 1][index] !== 0 ? sum + item : sum), 0);
    }
  }
  return rez;
}
module.exports = getMatrixElementsSum;
