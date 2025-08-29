module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  let result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const row = i % 2 === 0 ? matrix[i] : matrix[i].slice().reverse();
    result = result.concat(row);
  }

  return result;
};
