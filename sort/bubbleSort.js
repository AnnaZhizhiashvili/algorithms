function bubbleSort(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        let isSwapped = false;
        for(let j = 0; j < i; j++) {
            if(arr[j + 1] < arr[j]) {
                [arr[j], arr[j+1]] =  [arr[j + 1], arr[j]]
                isSwapped = true;
            }
 
        }
        if(!isSwapped) {
            return arr;
        }
    }
    return arr

}

// O(n2^) - time
// O(1) space
