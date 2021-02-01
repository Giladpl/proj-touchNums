function copyMat(mat) {
    var newMat = [];
    for (var i = 0; i < mat.length; i++) {
        newMat[i] = [];
        for (var j = 0; j < mat[0].length; j++) {
            newMat[i][j] = mat[i][j];
        }
    }
    return newMat;
}

// var nums = [1, 2, 3];
// console.log('arr', nums);
// var copy = nums.slice();
// console.log('copy', copy);
// nums.push(7)
// console.log('nums', nums);
// console.log('copy', copy);

// var mat = [[1, 2], [3, 4]];
// console.log('mat', mat);
// var copy = mat.slice();
// console.log('copy', copy);
// mat.push(7)
// mat[0][0] = 8
// console.log('mat', mat);
// console.log('copy', copy)


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive 
}



