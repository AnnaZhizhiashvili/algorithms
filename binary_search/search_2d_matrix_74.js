var searchMatrix = function(matrix, target) {
    let start = 0;
    let end = matrix.length - 1;
    while(start <= end) {
        let middleIndex = Math.floor((start + end) / 2);
        if(target > matrix[middleIndex][matrix[middleIndex].length - 1]) {
            start = middleIndex  + 1;
            console.log("if")
            console.log("middleIndex", middleIndex)
        } else if ( target < matrix[middleIndex][0]) {
           end = middleIndex - 1;
        } else {
            console.log("in else",  matrix[middleIndex].indexOf(target) )
            return matrix[middleIndex].indexOf(target) !== -1;
        }
    }

    return false;

};

 let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 90;

 console.log(searchMatrix(matrix, target))