function findDuplicates(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }

    const arrOfDuplicates = [];

    map.forEach((value, key) => {
        if (value > 1) {
            arrOfDuplicates.push(key)
        }
    })

    return arrOfDuplicates;
}

console.log(findDuplicates([1, 2, 2, 3, 4]))