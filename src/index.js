
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (matrix === [] || matrix === undefined) {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        let len = matrix[i].length;

        for (let j = 0; j < len; j++) {
            let newColumnIndex;
            if (i % 2 === 0) {
                arr.push(matrix[i][j]);
            } else {
                newColumnIndex = len - 1 - j;
                arr.push(matrix[i][newColumnIndex]);
            }


        }
    }

    return arr;

}
